import { useEffect, useState } from "react"
import AddNewUser from "../components/AddNewUser"
import Users from "../components/Users"

function LogIn() {
    const [users, setUsers] = useState([])

    function getUsersFromServer() {
        fetch(`http://localhost:4000/users`).then(res => res.json()).then(userInServer => setUsers(userInServer))
    }

    useEffect(getUsersFromServer, [])


    return <div className="main-wrapper login">
        <section className="login-section">
            <h2>Choose your user!</h2>
            <ul>
                {users.map(user => <Users key={user.id} user={user} />)}


                <AddNewUser />
            </ul>
        </section>
    </div>

}
export default LogIn