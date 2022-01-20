import Message from "../Message"

function Messages(props) {
    return <ul className="conversation__messages">
        {props.currentConversation.messages.map(message =>
            <Message
                message={message} currentUser={props.currentUser}
            />)}
    </ul>
}
export default Messages