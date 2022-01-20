function UserToTalkTo(props) {



    return <li>
        <button className="user-selection"
            onClick={() => {
                props.addNewConversation(props.user.id)

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