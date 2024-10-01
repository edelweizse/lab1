import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  const [username, setUsername] = useState('')
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-4/5 md:w-1/4 text-center">
        <h1 className="text-white text-4xl font-semibold pb-4 border-b-2 border-white mb-8">
          Sign In
        </h1>
        <div>
          <input 
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 mb-6 rounded-none bg-gray-800 text-white focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Link 
          onClick={(e) => (!username) ? e.preventDefault() : null}
          to={`/chat/main?username=${username}`}
        >
          <button
            className="w-full py-4 bg-green-500 text-white uppercase rounded-lg hover:bg-green-700 transition-colors"
            type="submit"
          >
            Join
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join