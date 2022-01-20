function Message(props) {
    return <li className={props.message.userId === props.currentUser.id ? 'outgoing' : null}>
        <p>
            {props.message.messageText}
        </p>
    </li>
}

export default Message