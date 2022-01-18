import Chat from "./Chat"
import StartNewChat from "./StartNewChat"

function SideChat() {
    return <ul>
        {/* <!-- This first item should always be present --> */}
        <StartNewChat />
        {/* <!--  --> */}

        <Chat />
    </ul>

}
export default SideChat