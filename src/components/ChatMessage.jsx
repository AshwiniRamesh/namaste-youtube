import React, { useEffect, useState, useRef } from "react";
import { fetchLiveChatId, fetchLiveMessages } from "../utils/getChats";

export default function ChatMessage({ videoId }) {
          const [messages, setMessages] = useState([]);
          const [liveChatId, setLiveChatId] = useState(null);
          const chatContainerRef = useRef(null);
        
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
                const chatMessages = await fetchLiveMessages(liveChatId);
        
                if (Array.isArray(chatMessages)) {
                  setMessages((prev) => {
                    const newMessages = chatMessages.filter(
                      (msg) => !prev.some((existing) => existing.id === msg.id)
                    );
        
                    const updatedMessages = [...prev, ...newMessages].slice(-5); // Keep only latest 30 messages
                    return updatedMessages;
                  });
                }
              }, 3000); // Poll every 3 seconds
        
              return () => clearInterval(interval);
            }
          }, [liveChatId]);
        
          // Scroll to latest message
          useEffect(() => {
            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
          }, [messages]);
        
          return (
            <div className="p-4 border rounded-lg w-[400px] h-[500px] bg-gray-900 text-white">
              <h2 className="text-lg font-bold mb-2">Live Chat</h2>
              <div
                ref={chatContainerRef}
                className="h-[440px] overflow-y-auto border-t border-gray-700 p-2"
              >
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
        
