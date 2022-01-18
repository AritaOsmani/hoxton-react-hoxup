import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import LogIn from "./pages/LogIn"
import MainPage from "./pages/MainPage"
import MainPageAside from "./pages/MainPageAside"

function App() {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`).then(res => res.json()).then(userInServer => setUsers(userInServer))
  }

  useEffect(getUsersFromServer, [])

  return (

    <main>
      {modal === 'add' && <AddUser setModal={setModal} users={users} setUsers={setUsers} />}
      <Routes>
        <Route path='/login' element={<LogIn setModal={setModal} users={users} setCurrentUser={setCurrentUser} />} />
        {/* <Route path='/logged-in/:id' element={<MainPage />} /> */}
        <Route path='/logged-in' element={<MainPageAside currentUser={currentUser} />} />

      </Routes>
    </main>


  )
}
export default App