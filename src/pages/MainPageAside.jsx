import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import MainChat from "../components/MainChat/MainChat"
import AsideMenu from "./AsideMenu"

function MainPageAside(props) {
    const navigate = useNavigate()
    const params = useParams()
    const [currentConversation, setCurrentConversation] = useState({})
    const [participant, setParticipant] = useState(null)

    useEffect(function () {
        if (props.currentUser === null) {
            navigate('/login')
        }
    }, [props.currentUser])

    useEffect(() => {
        if (params.id) {
            fetch(`http://localhost:4000/conversations/${params.id}?_embed=messages`).then(res => res.json())
                .then(conversation =>
                    setCurrentConversation(conversation)
                )
        }
    }, [params.id])
    if (props.currentUser === null) return <h1>Not signed in</h1>


    // let participant = props.users.find(user => user.id === props.currentConversation.participantId)
    // console.log('participant', participant)



    return <div className="main-wrapper">
        {/* <!-- Side Panel --> */}
        <AsideMenu currentUser={props.currentUser} setModal={props.setModal} userConversations={props.userConversations} users={props.users} setParticipant={setParticipant} />
        {params.id ? <MainChat currentConversation={currentConversation} users={props.users} participant={participant} /> : null}

    </div>
}
export default MainPageAside