import Chat from "./Chat"
import StartNewChat from "./StartNewChat"
import { useEffect, useState } from "react/cjs/react.development"

function SideChat(props) {

    return <ul>

        <StartNewChat setModal={props.setModal} />
        {props.userConversations.map(user => {
            const userToTalkToId = props.currentUser.id === user.userId ? user.participantId : user.userId;
            const talkingToUser = props.users.find(u => u.id === userToTalkToId)

            return (

                <Chat key={user.id} talkingToUser={talkingToUser} user={user} setParticipant={props.setParticipant} />
            )

        })}


    </ul>

}
export default SideChat