import React, { useEffect, useState } from "react";
import { fetchLiveChatId, fetchLiveMessages } from "../utils/getChats";

export default function ChatMessage({ videoId }) {
  const [messages, setMessages] = useState([]);
  const [liveChatId, setLiveChatId] = useState(null);

  useEffect(() => {
    const getChatId = async () => {
      if (videoId) {
        const id = await fetchLiveChatId(videoId);
        setLiveChatId(id);
      }
    };
    getChatId();
  }, [videoId]);

  useEffect(() => {
    if (liveChatId) {
      const interval = setInterval(async () => {
        const chatMessages = await fetchLiveMessages(liveChatId); // Await response
        if (Array.isArray(chatMessages)) {
          setMessages((prev) => [...chatMessages, ...prev]); // Only update if valid
        }
      }, 1000); // Poll every 1 second

      return () => clearInterval(interval);
    }
  }, [liveChatId]);

  return (
    <div className="p-4 border rounded-lg w-full max-w-[500px] bg-gray-900 text-white">
      <h2 className="text-lg font-bold mb-2">Live Chat</h2>
      <div className="h-80 overflow-y-auto border-t border-gray-700 p-2">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="flex items-center space-x-2 mb-2">
              <img
                src={msg.authorImage}
                alt={msg.author}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{msg.author}</p>
                <p className="text-sm">{msg.message}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No live messages yet...</p>
        )}
      </div>
    </div>
  );
}
