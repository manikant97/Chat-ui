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
      className="p-4 bg-green border-t border-black-200 flex items-center gap-3 shadow-sm"
    >
      <input
        type="text"
        className="flex-1 border border-red-300 rounded-full px-5 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 placeholder-green-400"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;