import { NextResponse } from "next/server";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";
import { CallbackManager } from "langchain/callbacks";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";

export const config = {
  api: {
    bodyParser: false,
  },
  runtime: "edge",
};

export default async function handler(req, res) {
  console.log("Fetchin!");
  const body = await req.json();

  try {
    if (!process.env.NEXT_PUBLIC_CHATGPT_API_KEY) {
      throw new Error("OPENAI_API_KEY is not defined.");
    }

    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    const llm = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      openAIApiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
      temperature: 0.3,
      streaming: true,
      callbackManager: CallbackManager.fromHandlers({
        handleLLMNewToken: async (token) => {
          await writer.ready;
          await writer.write(encoder.encode(`${token}`));
        },
        handleLLMEnd: async () => {
          await writer.ready;
          await writer.close();
        },
        handleLLMError: async (e) => {
          await writer.ready;
          await writer.abort(e);
        },
      }),
    });

    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(
        "Você é uma psicóloga que atende online. Responda o usuário da melhor maneira e tente ajuda-la da melhor maneira. Não responda com frases muito longas."
      ),
      // SystemMessagePromptTemplate.fromTemplate(
      //   "Você é uma psicóloga que atende online. Responda o usuário da melhor maneira e tente ajuda-la da melhor maneira. Se ela falar em suicidio, diga algo positivo e sugira conversar com alguém próximo e ligar para 188."
      // ),
      HumanMessagePromptTemplate.fromTemplate("{text}"),
    ]);

    const chain = new LLMChain({
      prompt: chatPrompt,
      llm: llm,
    });

    console.log("text", body.text);

    chain
      .call({
        text: body.text,
      })
      .catch(console.error);

    return new NextResponse(stream.readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
