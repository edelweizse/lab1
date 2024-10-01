import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

const Messages = ({ messages, username }) => {
  return (
    <ScrollToBottom className="flex-auto py-5 overflow-auto">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} username={username} />
      </div>
    ))}
  </ScrollToBottom>
  )
}

export default Messages