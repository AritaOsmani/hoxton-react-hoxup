import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import StartConversationModal from "../components/StartConversationModal"
import AsideMenu from "./AsideMenu"

function MainPageAside(props) {
    const navigate = useNavigate()
    const [userConversations, setUserConversations] = useState([])

    useEffect(function () {
        if (props.currentUser === null) {
            navigate('/login')
        }
    }, [props.currentUser])


    function getUserConversations() {
        fetch(`http://localhost:4000/conversations?userId=${props.currentUser.id}`).then(res => res.json()).then(conversationsInServer => setUserConversations(conversationsInServer))
    }
    useEffect(() => {
        if (props.currentUser === null) return

        getUserConversations()

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
        <AsideMenu currentUser={props.currentUser} setModal={props.setModal} userConversations={userConversations} users={props.users} />
    </div>
}
export default MainPageAside