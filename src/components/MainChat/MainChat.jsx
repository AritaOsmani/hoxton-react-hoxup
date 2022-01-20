import ChatFooter from "./ChatFooter"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

function MainChat(props) {
    if (props.currentConversation === null) return <h1>No conversations</h1>
    console.log('currentConversation: ', props.currentConversation)
    return <main className="conversation">
        {/* <!-- Chat header --> */}
        <ChatHeader participant={props.participant} />


        {/* <!-- The Messages List will go here. Check main-messages-list.html   --> */}
        <Messages currentConversation={props.currentConversation} currentUser={props.currentUser} />

        {/* <!-- Message Box --> */}
        <ChatFooter currentConversation={props.currentConversation} addNewMessage={props.addNewMessage} />
    </main>
}
export default MainChat