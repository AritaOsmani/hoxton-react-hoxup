import { useEffect, useState } from "react"
import AddNewUserBtn from "../components/AddNewUserBtn"
import AddUser from "../components/AddUser"
import Users from "../components/Users"

function LogIn(props) {
    return <div className="main-wrapper login">
        <section className="login-section">
            <h2>Choose your user!</h2>
            <ul>
                {props.users.map(user => <Users key={user.id} user={user} setCurrentUser={props.setCurrentUser} />)}


                <AddNewUserBtn setModal={props.setModal} />

            </ul>

        </section>

    </div>

}
export default LogIn