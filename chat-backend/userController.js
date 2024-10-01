const users = []

const addUser = ({ id, username }) => {
  username = username.trim().toLowerCase()

  if(!username){
    return { error: `Missing username`}
  }
  
  if(users.find(user => user.username === username)){
    return { error: `Username is taken`}
  }

  const user = { id, username }
  users.push(user)

  return { user}
}

const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id)
  if (index !== -1){
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  return users.find(user => user.id === id)
}

const getUsers = () => users

module.exports = { addUser, removeUser, getUser, getUsers }