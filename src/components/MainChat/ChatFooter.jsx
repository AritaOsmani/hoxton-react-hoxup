import ConversationForm from "./ConversationForm"

function ChatFooter(props) {

    return <footer>
        <ConversationForm currentConversation={props.currentConversation} addNewMessage={props.addNewMessage} />
    </footer>
}
export default ChatFooter