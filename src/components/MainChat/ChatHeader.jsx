function ChatHeader(props) {

    return <header className="panel">
        <img src={props.participant.avatar} alt="" className="avatar" />

        <h3>{`${props.participant.firstName} ${props.participant.lastName}`}</h3>


    </header>
}
export default ChatHeader