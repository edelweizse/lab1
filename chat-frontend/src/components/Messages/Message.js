import React from 'react'

const Message = ({message: {text, user}, username}) => {
  let isSentByCurrentUser = false

  const trimmedName = username.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return (
    <div className={`flex justify-${isSentByCurrentUser ? 'end' : 'start'} p-2`}>
      {isSentByCurrentUser ? (
        <>
          <p className="pr-2 text-gray-400">{trimmedName}</p>
          <div className="bg-green-500 rounded-lg p-2 max-w-[80%]">
            <p className="text-white">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-200 rounded-lg p-2 max-w-[80%]">
            <p className="text-gray-800">{text}</p>
          </div>
          <p className="pl-2 text-gray-400">{user}</p>
        </>
      )}
    </div>
  )
}

export default Message