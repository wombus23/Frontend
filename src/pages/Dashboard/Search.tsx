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

const Search = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchSavedChats = async () => {
      try {
        const response = await fetch(
          "https://qanoonbots-652bb77e7052.herokuapp.com/api/get_saved_chats/"
        );
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredChats = chats.filter((chat) =>
    chat.messages.some((message) =>
      message.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] p-4 relative flex flex-col gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="search-box bg-[#424857]/40 rounded-xl w-full flex items-center !min-h-[48px] gap-2"
        >
          <input
            autoFocus
            className=" text-white bg-transparent outline-none flex-grow px-4 h-full"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search messages..."
          />
        </form>
        <div className="list flex flex-col gap-2 pe-2 max-h-[calc(100dvh-80px)] overflow-y-scroll">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat, index) => (
              <div
                key={index}
                className="chat bg-[#1E1E1E] p-4 border-[1px] border-white/20 md:border-white rounded-xl"
              >
                <div className="chat-header text-white font-bold">
                  Chat from {new Date(chat.created_at).toLocaleString()}
                </div>
                <div className="chat-messages mt-2 space-y-2">
                  {chat.messages.map((message, idx) => (
                    <div
                      key={idx}
                      className={`message ${
                        message.sender === "bot"
                          ? "text-blue-400"
                          : "text-green-400"
                      }`}
                    >
                      <strong>
                        {message.sender === "bot" ? "Bot" : "You"}:
                      </strong>{" "}
                      {message.text}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-neutral-500">No matching chats found.</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Search;
