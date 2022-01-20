import { useState, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import StartConversationModal from "./components/StartConversationModal"
import LogIn from "./pages/LogIn"
import MainPage from "./pages/MainPage"
import MainPageAside from "./pages/MainPageAside"

function App() {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [conversations, setConversations] = useState([])

  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`).then(res => res.json()).then(userInServer => setUsers(userInServer))
  }

  function getConversationsFromServer() {
    fetch(`http://localhost:4000/conversations`).then(res => res.json()).then(conversationInServer => setConversations(conversationInServer))
  }

  useEffect(getUsersFromServer, [])
  useEffect(getConversationsFromServer, [])

  return (

    <main>
      {modal === 'add' && <AddUser setModal={setModal} users={users} setUsers={setUsers} />}

      {modal === 'start' &&
        <StartConversationModal
          setModal={setModal}
          users={users}
          currentUser={currentUser}
          conversations={conversations}
          setConversations={setConversations}
        />}
      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<LogIn setModal={setModal} users={users} setCurrentUser={setCurrentUser} />} />
        {/* <Route path='/logged-in/:id' element={<MainPage currentUser={currentUser} />} /> */}
        <Route path='/logged-in' element={<MainPageAside currentUser={currentUser} setModal={setModal} modal={modal} users={users} />} />

      </Routes>
    </main>


  )
}
export default App