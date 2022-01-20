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
  const [userConversations, setUserConversations] = useState([])


  const newPeopleToTalkTo = users.filter(user => !userConversations.some(conversation =>
    conversation.userId === user.id || conversation.participantId === user.id
  ))

  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`).then(res => res.json()).then(userInServer => setUsers(userInServer))
  }

  function getUserConversations() {
    fetch(`http://localhost:4000/conversations?userId=${currentUser.id}`).then(res => res.json()).then(conversationsInServer => setUserConversations(conversationsInServer))
  }
  useEffect(() => {
    if (currentUser === null) return

    getUserConversations()

  }, [currentUser])


  useEffect(getUsersFromServer, [])

  function addNewConversation(participantId) {
    return fetch(`http://localhost:4000/conversations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: currentUser.id, participantId: participantId })
    })
      .then(res => res.json()).then(res => {
        const newConversations = JSON.parse(JSON.stringify(userConversations))
        newConversations.push(res);
        setUserConversations(newConversations)
        setModal('')
      })
  }

  return (

    <main>
      {modal === 'add' && <AddUser setModal={setModal} users={users} setUsers={setUsers} />}

      {modal === 'start' &&
        <StartConversationModal
          newPeopleToTalkTo={newPeopleToTalkTo}
          addNewConversation={addNewConversation}
          setModal={setModal}
        />}
      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<LogIn setModal={setModal} users={users} setCurrentUser={setCurrentUser} />} />
        <Route path='/logged-in/:id' element={<MainPageAside userConversations={userConversations} currentUser={currentUser} setModal={setModal} modal={modal} users={users} />} />
        <Route path='/logged-in' element={<MainPageAside userConversations={userConversations} currentUser={currentUser} setModal={setModal} modal={modal} users={users} />} />

      </Routes>
    </main>


  )
}
export default App