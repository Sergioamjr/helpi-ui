import Layout from "../components/Layout";
import Chat from "@/components/Chat";
import { useEffect, useState } from "react";
import { fetchAIResponse } from "@/services";

export default function ChatPage() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    hasDone: false,
  });

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(defaultMessages);

  useEffect(() => {
    document.querySelector(".chat-area").scrollTo(0, 3000);
  }, [chatHistory]);

  const fetchAIAnswer = async (text) => {
    try {
      setState((prev) => ({
        ...prev,
        isLoading: true,
        hasDone: false,
      }));

      const res = await fetchAIResponse({
        text,
      });

      setChatHistory((prev) => [
        ...prev,
        {
          message: "",
          isUser: false,
          submitedAt: new Date(),
        },
      ]);

      const stream = res.body;
      const reader = stream?.getReader();

      try {
        while (true) {
          const { done, value } = await reader?.read();
          if (done) {
            setState((prev) => ({ ...prev, isLoading: false, hasDone: true }));
            break;
          }

          const decodedValue = new TextDecoder().decode(value);

          setChatHistory((prev) => {
            return prev.map((chat, index) => {
              if (index === chatHistory.length + 1) {
                return {
                  ...chat,
                  message: chat.message + decodedValue,
                };
              }

              return chat;
            });
          });
        }
      } catch (error) {
        setState((prev) => ({ ...prev, hasError: true, isLoading: false }));
      } finally {
        reader?.releaseLock();
      }
    } catch (error) {
      setState((prev) => ({ ...prev, hasError: true, isLoading: false }));
    }
  };

  const onSubmit = () => {
    setChatHistory((prev) => [
      ...prev,
      {
        message,
        isUser: true,
        submitedAt: new Date(),
      },
    ]);

    setMessage("");
    fetchAIAnswer(message);
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Layout>
      <div className="max-w-[600px] h-full max-h-[calc(100%_-_84px)] px-4 m-auto">
        <Chat
          isButtonDisabled={state.isLoading}
          onSubmit={onSubmit}
          chatHistory={chatHistory}
          message={message}
          onChange={onChange}
        />
      </div>
    </Layout>
  );
}

var defaultMessages = [
  {
    message: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
    isUser: false,
    submitedAt: new Date(),
  },
  {
    message: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
    isUser: true,
    submitedAt: new Date(),
  },
  {
    message: "lorem ipsum dolor",
    isUser: true,
    submitedAt: new Date(),
  },
  {
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem ipsum dolor sit amet, consectetur",
    isUser: false,
    submitedAt: new Date(),
  },
];
