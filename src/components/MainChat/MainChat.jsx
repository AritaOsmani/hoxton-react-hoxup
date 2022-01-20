import ChatFooter from "./ChatFooter"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

function MainChat(props) {

    console.log('currentConversation: ', props.currentConversation)
    return <main className="conversation">
        {/* <!-- Chat header --> */}
        <ChatHeader participant={props.participant} />


        {/* <!-- The Messages List will go here. Check main-messages-list.html   --> */}
        <Messages />

        {/* <!-- Message Box --> */}
        <ChatFooter />
    </main>
}
export default MainChat