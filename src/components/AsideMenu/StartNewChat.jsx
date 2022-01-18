function StartNewChat(props) {
    return <li>
        <button className="chat-button"
            onClick={() => {
                props.setModal('start')
            }}>
            <div><h3>+ Start a new Chat</h3></div>
        </button>
    </li>
}
export default StartNewChat