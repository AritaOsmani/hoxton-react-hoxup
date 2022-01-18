import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import StartConversationModal from "./components/StartConversationModal"
import LogIn from "./pages/LogIn"
import MainPage from "./pages/MainPage"
import MainPageAside from "./pages/MainPageAside"

function App() {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`).then(res => res.json()).then(userInServer => setUsers(userInServer))
  }

  useEffect(getUsersFromServer, [])

  return (

    <main>
      {modal === 'add' && <AddUser setModal={setModal} users={users} setUsers={setUsers} />}
      {modal === 'start' && <StartConversationModal setModal={setModal} users={users} currentUser={currentUser} />}
      <Routes>
        <Route path='/login' element={<LogIn setModal={setModal} users={users} setCurrentUser={setCurrentUser} />} />
        {/* <Route path='/logged-in/:id' element={<MainPage currentUser={currentUser} />} /> */}
        <Route path='/logged-in' element={<MainPageAside currentUser={currentUser} setModal={setModal} />} />

      </Routes>
    </main>


  )
}
export default App