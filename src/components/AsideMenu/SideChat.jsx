import Chat from "./Chat"
import StartNewChat from "./StartNewChat"

function SideChat(props) {
    return <ul>
        {/* <!-- This first item should always be present --> */}
        <StartNewChat setModal={props.setModal} />
        {/* <!--  --> */}

        <Chat />
    </ul>

}
export default SideChat