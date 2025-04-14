import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white border-t border-cyan-200 flex items-center gap-3 shadow-lg"
    >
      <input
        type="text"
        className="flex-1 border border-lime-200 rounded-full px-5 py-2.5 text-sm bg-lime-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 placeholder-gray-700"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;