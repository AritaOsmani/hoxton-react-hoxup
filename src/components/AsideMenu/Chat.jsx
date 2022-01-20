
function Chat(props) {

    return <li>
        <button className="chat-button">
            <img
                className="avatar"
                height="50"
                width="50"
                alt=""
                src={props.talkingToUser.avatar}
            />
            <div>
                <h3>{`${props.talkingToUser.firstName} ${props.talkingToUser.lastName}`}</h3>
                <p>Last message</p>
            </div>
        </button>
    </li>
}
export default Chat