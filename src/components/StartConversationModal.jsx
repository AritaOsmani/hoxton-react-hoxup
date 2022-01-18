import './ModalStyling.css'
import UserToTalkTo from './UserToTalkTo'
function StartConversationModal(props) {

    let usersToStartConversationWith = props.users.filter(user => user.id !== props.currentUser.id)
    return <div className="modal-container">
        <div className="start-conversation-modal">
            <button
                className='close-btn'
                onClick={() => {
                    props.setModal('')
                }}
            >X</button>
            <h3>Pick a user to talk to</h3>
            <ul>
                {usersToStartConversationWith.map(user =>
                    <UserToTalkTo user={user}
                        key={user.id}
                    />
                )}

            </ul>
        </div>
    </div>
}
export default StartConversationModal