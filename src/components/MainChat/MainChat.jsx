import ChatFooter from "./ChatFooter"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

function MainChat() {

    return <main className="conversation">
        {/* <!-- Chat header --> */}
        <ChatHeader />

        {/* <!-- The Messages List will go here. Check main-messages-list.html   --> */}
        <Messages />

        {/* <!-- Message Box --> */}
        <ChatFooter />
    </main>
}
export default MainChat