import { useNavigate } from "react-router-dom"

function Users(props) {
    const navigate = useNavigate()
    return <li>
        <button className="user-selection"
            onClick={() => {
                props.setCurrentUser(props.user)
                navigate('/logged-in')
            }}
        >
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