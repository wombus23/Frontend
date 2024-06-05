import { DashboardLayout } from "@/layouts";
import { useState, useEffect } from "react";

type Message = {
  sender: string;
  text: string;
};

type Chat = {
  messages: Message[];
  created_at: string;
};

const SavedChats = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchSavedChats = async () => {
      try {
        const response = await fetch("https://qanoonbots-652bb77e7052.herokuapp.com/api/get_saved_chats/");
        if (response.ok) {
          const data: Chat[] = await response.json();
          setChats(data);
        } else {
          console.error("Failed to fetch saved chats:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching saved chats:", error);
      }
    };

    fetchSavedChats();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] p-4 relative">
        <header className="h-[40px] flex items-center p-4 absolute top-0 left-0 bg-neutral-800/80 backdrop-blur-lg w-full">
          <h1 className="font-light text-[16px] text-neutral-500">Saved Chats</h1>
        </header>
        <div className="saved-chats pt-[60px] px-2">
          {chats.length > 0 ? (
            chats.map((chat, index) => (
              <div key={index} className="chat bg-[#1E1E1E] p-4 border-[1px] border-white/20 md:border-white rounded-xl mb-4">
                <div className="chat-header text-white font-bold">
                  Chat from {new Date(chat.created_at).toLocaleString()}
                </div>
                <div className="chat-messages mt-2 space-y-2">
                  {chat.messages.map((message, idx) => (
                    <div key={idx} className={`message ${message.sender === "bot" ? "text-blue-400" : "text-green-400"}`}>
                      <strong>{message.sender === "bot" ? "Bot" : "You"}:</strong> {message.text}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-neutral-500">No saved chats available.</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SavedChats;
