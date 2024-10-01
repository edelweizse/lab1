import React from 'react'
import { HiStatusOnline } from 'react-icons/hi'

const TextContainer = ({ users }) => {
  return (
    <div className="flex flex-col ml-24 text-white h-3/5 justify-between">
    {
      users ? (
        <div>
          <h1 className="text-lg">People currently chatting:</h1>
          <div className="flex items-center mb-20">
            <h2 className="text-lg">
              {users.map(({ username }) => (
                <div key={username} className="flex items-center mr-4">
                  {username}
                  <HiStatusOnline className="text-green-500 text-xl ml-2" />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null
    }
  </div>
  )
}

export default TextContainer