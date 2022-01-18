
import './ModalStyling.css'

function AddUser(props) {

    function addUser(firstName, lastName, phoneNumber) {
        return fetch(`http://localhost:4000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, avatar: `https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg` })
        }).then(res => res.json())
    }

    return <div className="modal-container">
        <div className='add-user-modal'>
            <button onClick={() => {
                props.setModal('')
            }
            }
                className="close-btn">X</button>
            <h2>Enter your details</h2>
            <form action="" className='add-form'
                onSubmit={event => {
                    event.preventDefault();
                    const name = event.target.firstName.value;
                    const surname = event.target.lastName.value;
                    const phone = event.target.phoneNum.value;
                    addUser(name, surname, phone).then(res => {
                        const newUsers = JSON.parse(JSON.stringify(props.users))
                        newUsers.push(res)
                        props.setUsers(newUsers)
                    })
                    event.target.reset()
                }}>
                <label htmlFor="">
                    First name
                    <input name='firstName' type="text" />
                </label>
                <label htmlFor="">
                    Last name
                    <input type="text" name='lastName' />
                </label>
                <label htmlFor="">
                    Phone number
                    <input type="text" name='phoneNum' />
                </label>
                <button type='submit' className="create-btn">CREATE USER</button>
            </form>
        </div>
    </div>
}
export default AddUser