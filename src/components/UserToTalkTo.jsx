function UserToTalkTo(props) {

    function addNewConversation(userId, participantId) {
        return fetch(`http://localhost:4000/conversations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId, participantId: participantId })
        }).then(res => res.json())
    }

    return <li>
        <button className="user-selection"
            onClick={() => {
                addNewConversation(props.currentUser.id, props.user.id).then(res => {
                    const newConversations = JSON.parse(JSON.stringify(props.conversations))
                    newConversations.push(res);
                    props.setConversations(newConversations)
                    props.setModal('')
                })
            }}>
            <img
                src={props.user.avatar}
                width="40"
                height="40"
                alt="" />
            <h5>{`${props.user.firstName} ${props.user.lastName}`}</h5>
        </button>
    </li>
}
export default UserToTalkTo