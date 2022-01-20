import { useNavigate } from 'react-router-dom'
import '../components/ModalStyling.css'
function LogOutDeleteModal(props) {
    const navigate = useNavigate();
    return <div className="modal-container">
        <div className="log-out-delete-modal">
            <button onClick={() => {
                props.setModal('')
            }} className="close-btn">X</button>
            <h2>Settings</h2>
            <button onClick={() => {
                props.setCurrentUser(null)
                navigate('/login')
                props.setModal('')

            }} className="log-out-btn">LOG OUT</button>
            <button onClick={() => {
                // let value = confirm('Are you sure you want to delete this account?')
                props.deleteUser()
                navigate('/login')
                props.setModal('')
            }}
                className="delete-btn">DELETE</button>
        </div>
    </div>
}
export default LogOutDeleteModal