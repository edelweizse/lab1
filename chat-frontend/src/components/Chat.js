import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { HiStatusOnline } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

import Messages from './Messages/Messages'
import Input from './Input'
import TextContainer from './TextContainer'

let socket

const Chat = () => {
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState(``)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const location = useLocation()

  useEffect(() => {
    const username = queryString.parse(location.search).username
    socket = io(`http://localhost:3000`, { transports: [`websocket`, `pooling`, `flashsocket`] })

    setUsername(username)

    socket.emit(`join`, { username }, (error) => {
      if (error) {
        alert(error)
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [`localhost:3000`, location.search])

  useEffect(() => {
    socket.on(`message`, message => {
      setMessages((prevMessages) => [...prevMessages, message])
    })
    socket.on(`roomData`, ({ users }) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      socket.emit(`sendMessage`, message, () => setMessage(``))
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col justify-between bg-white rounded-lg h-3/5 w-1/3 md:w-3/5">
        <div className="flex items-center justify-between bg-green-600 rounded-t-lg h-16 w-full">
          <div className="flex items-center ml-5 text-white">
            <HiStatusOnline className="text-2xl mx-2" />
            <h3 className="text-lg">Main</h3>
          </div>
          <div className="flex justify-end mr-5">
            <a href="/chat">
              <IoMdClose className="text-white text-2xl" />
            </a>
          </div>
        </div>
        <Messages messages={messages} username={username} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat
