import Layout from "../components/Layout";
import Chat from "@/components/Chat";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      message:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
      isUser: false,
      submitedAt: new Date(),
    },
    {
      message:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
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
  ]);

  useEffect(() => {
    document.querySelector(".chat-area").scrollTo(0, 3000);
  }, [chatHistory]);

  const onSubmit = () => {
    setChatHistory([
      ...chatHistory,
      {
        message,
        isUser: true,
        submitedAt: new Date(),
      },
    ]);
    setMessage("");
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Layout>
      <div className="max-w-[600px] h-full max-h-[calc(100%_-_84px)] px-4 m-auto">
        <Chat
          onSubmit={onSubmit}
          chatHistory={chatHistory}
          message={message}
          onChange={onChange}
        />
      </div>
    </Layout>
  );
}
