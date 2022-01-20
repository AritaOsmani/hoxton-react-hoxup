import './ModalStyling.css'
import UserToTalkTo from './UserToTalkTo'
function StartConversationModal(props) {


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
                {props.newPeopleToTalkTo.map(user =>
                    <UserToTalkTo
                        addNewConversation={props.addNewConversation}
                        key={user.id}
                        user={user}


                    />
                )}

            </ul>
        </div>
    </div>
}
export default StartConversationModal