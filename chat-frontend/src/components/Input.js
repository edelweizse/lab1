import React from 'react'

const Input = ({ setMessage, sendMessage, message}) => {
  return (
    <form className="flex border-t-2 border-gray-300">
    <input
      className="border-none rounded-none py-2 px-4 w-4/5 text-lg focus:outline-none"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => e.key === `Enter` ? sendMessage(e) : null}
    />
    <button
      className="text-white uppercase bg-green-600 py-2 px-4 w-1/5 border-none"
      onClick={e => sendMessage(e)}
    >
      Send
    </button>
  </form>
  );
}

export default Input