function AddNewUserBtn(props) {
    return <li>
        <button onClick={() => {
            props.setModal('add')
        }}
            className="user-selection"><h3>+ Add a new user</h3></button>
    </li>
}
export default AddNewUserBtn