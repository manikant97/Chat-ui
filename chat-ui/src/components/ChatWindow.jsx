import React, { useState, useEffect } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSend = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate receiving a message
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: 'This is a bot reply.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-lg h-[80vh] bg-gradient-to-br from-pink-100 via-yellow-100 to-cyan-100 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-red-200">
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-br from-white to-lime-50/80">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-red-600 text-sm font-semibold">
            Start the conversation!
          </div>
        ) : (
          messages.map((msg) => <Message key={msg.id} {...msg} />)
        )}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;