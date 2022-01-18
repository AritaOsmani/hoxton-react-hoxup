function Users(props) {
    return <li>
        <button className="user-selection">
            <img
                className="avatar"
                width="50"
                height="50"
                src={props.user.avatar}
                alt=""
            />
            <h3>{`${props.user.firstName} ${props.user.lastName}`}</h3>
        </button>
    </li>
}
export default Users