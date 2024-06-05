import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts";
import { UploadIcon, AttachIcon } from "@/components/icons";
import { useState, useEffect } from "react";

const rules = [
  {
    id: 1,
    title: "Be Specific",
    description: "Be specific with your question",
  },
  {
    id: 2,
    title: "Ask One Question At A Time",
    description:
      "Single question will help in get in-depth answers to your question.",
  },
  {
    id: 3,
    title: "Use Keywords",
    description: "Use of keywords will help find your desired topic quickly.",
  },
  {
    id: 4,
    title: "Provide Context",
    description: "Give context to your question for better understanding.",
  },
];

type Message = {
  sender: "bot" | "user";
  text: string;
};

const NewChat = () => {
  const [boxVisible, setBoxVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  

  useEffect(() => {
    setBoxVisible(true); // Reset visibility state when the component mounts

    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleBoxClose = () => {
    setBoxVisible(false);
  };

  const simulateTyping = (message: string) => {
    let index = 0;
    setTypingMessage("");

    const interval = setInterval(() => {
      setTypingMessage((prev) => (prev !== null ? prev + message[index] : null));
      index++;
      if (index === message.length) {
        clearInterval(interval);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: message },
        ]);
        setTypingMessage(null);
      }
    }, 50);
  };

  const _onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userMessage = formData.get("message")?.toString().trim();

    if (userMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
      ]);
      event.currentTarget.reset();
      handleBoxClose();

      // Fetch response from backend
      try {
        const response = await fetch('http://127.0.0.1:8000/generate_text/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: userMessage }),
        });

        if (response.ok) {
          const data = await response.json();
          const botMessage = data.generated_text;
          simulateTyping(botMessage);
        } else {
          console.error('Failed to get response from backend:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching response from backend:', error);
      }
    }
  };

  const saveChat = async () => {
    try {
      const response = await fetch('https://qanoonbots-652bb77e7052.herokuapp.com/api/save_chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (response.ok) {
        alert('Chat saved successfully!');
      } else {
        console.error('Failed to save chat:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving chat:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] py-4 px-2 relative flex flex-col items-center">
        <div className="chat-area flex flex-col h-[calc(100%-72px)] w-full max-w-[640px] mx-auto gap-4 pt-[40px] overflow-y-scroll px-2">
          {boxVisible && (
            <div className="box bg-[#1E1E1E] p-4 border-[1px] border-white/20 md:border-white rounded-xl">
              <div className="flex items-center justify-between gap-2">
                <div className="icon min-w-[24px]"></div>
                <h3 className="text-xl">{"Let’s get started"}</h3>
                <CrossIcon
                  onClick={handleBoxClose}
                  className="max-w-[24px] cursor-pointer hover:opacity-70"
                />
              </div>
              <div className="rules space-y-10 md:px-10 py-6">
                {rules.map((rule) => (
                  <div key={rule.id} className="rule flex gap-4">
                    <h6 className="number min-w-[40px] h-[40px] border-white border-[1px] rounded-full flex items-center justify-center">
                      {rule.id}
                    </h6>
                    <div className="content space-y-1">
                      <h3 className="title text-lg">{rule.title}</h3>
                      <p className="description text-base opacity-70">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === "bot"
                  ? "bot-message bg-secondary/10 text-white"
                  : "human-message bg-neutral-800 text-white"
              } flex gap-2 p-4 rounded-2xl w-full max-w-[460px] ${
                message.sender === "bot" ? "me-auto" : "ms-auto"
              }`}
            >
              {message.text}
            </div>
          ))}
          {typingMessage !== null && (
            <div className="bot-message bg-secondary/10 text-white flex gap-2 p-4 rounded-2xl w-full max-w-[460px] me-auto">
              {typingMessage}
            </div>
          )}
        </div>
        <div className="chat-box h-[72px] bg-[#424857] rounded-xl w-full max-w-[640px] mx-auto flex justify-between items-center">
          <form
            onSubmit={_onSubmit}
            className="h-full flex items-center p-4 gap-2 flex-grow"
          >
            <input
              className="text-white bg-transparent outline-none flex-grow !h-[72px]"
              type="text"
              name="message"
              placeholder="Ask Qanoon-Bot..."
            />
            <Button
              size={"icon"}
              type="button"
              className="aspect-square text-white rounded-full bg-transparent hover:bg-teal-500 hover:text-white"
            >
              <AttachIcon className="w-[24px] h-[24px]" />
            </Button>
            <Button
              size={"icon"}
              type="submit"
              className="bg-second aspect-square text-white rounded-full bg-neutral-800 hover:bg-primary hover:text-white"
            >
              <UploadIcon className="w-[24px] h-[24px]" />
            </Button>
          </form>
          <Button onClick={saveChat} className="m-4 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600">
            Save Chat
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

const CrossIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default NewChat;
