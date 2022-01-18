import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import LogIn from "./pages/LogIn"

function App() {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])

  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`).then(res => res.json()).then(userInServer => setUsers(userInServer))
  }

  useEffect(getUsersFromServer, [])

  return (

    <main>
      {modal === 'add' && <AddUser setModal={setModal} users={users} setUsers={setUsers} />}
      <Routes>
        <Route path='/login' element={<LogIn setModal={setModal} users={users} />} />
      </Routes>
    </main>


  )
}
export default App