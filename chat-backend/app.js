const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const path = require('path');
const { addUser, removeUser, getUser, getUsers } = require('./userController');

const PORT = process.env.PORT || 3000;

const router = require('./routes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors({
  origin: "http://localhost:3001",
  credentials: true, 
  methods: ["GET", "POST"]
}))
app.use(router)

app.use(express.static(path.join(__dirname, "../chat-frontend/build")))

io.on("connection", (socket) => {
  socket.on("join", ({ username }, callback) => {
    const { error, user } = addUser({ id: socket.id, username })
    if (error) {
      return callback(error)
    }

    socket.join("main")

    socket.emit("message", { user: "admin", text: `${user.username}, welocome to the chat!`})
    socket.broadcast.to("main").emit("message", { user: "admin", text: `${user.username} has joined.`})

    io.to("main").emit("roomData", { room: "main", users: getUsers()})

    callback()
  })

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id)

    io.to("main").emit("message", { user: user.username, text: message})

    callback()
  })

  socket.on("disconnect", () => {
    const user = removeUser(socket.id)

    if(user){
      io.to("main").emit("message", { user: "admin", text: `${user.username} has left.`})
      io.to("main").emit("roomData", { room: "main", users: getUsers()})
    }
  })
})

server.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
})

