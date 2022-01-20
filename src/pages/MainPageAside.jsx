import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import MainChat from "../components/MainChat/MainChat"
import StartConversationModal from "../components/StartConversationModal"
import AsideMenu from "./AsideMenu"

function MainPageAside(props) {
    const navigate = useNavigate()


    useEffect(function () {
        if (props.currentUser === null) {
            navigate('/login')
        }
    }, [props.currentUser])



    // {
    //     props.modal === 'start' &&
    //     <StartConversationModal
    //         setModal={props.setModal}
    //         users={props.users}
    //         currentUser={props.currentUser}
    //         conversations={userConversations}
    //         setConversations={setUserConversations}

    //     />
    // }


    if (props.currentUser === null) return <h1>Not signed in</h1>

    return <div className="main-wrapper">
        {/* <!-- Side Panel --> */}
        <AsideMenu currentUser={props.currentUser} setModal={props.setModal} userConversations={props.userConversations} users={props.users} />
        <MainChat />
    </div>
}
export default MainPageAside