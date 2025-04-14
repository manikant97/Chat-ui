import React from 'react';

const Message = ({ text, sender, timestamp }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 px-4`}>
      <div
        className={`p-3 rounded-2xl max-w-sm text-sm shadow-sm transition-all duration-200 ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-red-800 border border-gray-200'
        }`}
      >
        <p className="leading-relaxed">{text}</p>
        <span
          className={`block text-xs mt-1.5 text-right ${
            isUser ? 'text-blue-100' : 'text-gray-500'
          } opacity-80`}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default Message;
