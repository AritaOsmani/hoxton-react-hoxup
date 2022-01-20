import SearchForm from "../components/AsideMenu/SearchForm"
import SideChat from "../components/AsideMenu/SideChat"

function AsideMenu(props) {
    return <aside>
        {/* <!-- Side Header --> */}
        <header className="panel-side">
            <img
                className="avatar"
                width="50"
                height="50"
                src={props.currentUser.avatar}
                alt=""
            />
            <h3>{`${props.currentUser.firstName} ${props.currentUser.lastName}`}</h3>
            <i className="fal fa-cog" onClick={() => {
                props.setModal('log-out')
            }}></i>
        </header>

        {/* <!-- Search form --> */}
        <SearchForm />

        {/* <!-- Side Chat List goes here. Check side-chat-list.html-->
    <!--  --> */}
        <SideChat
            setModal={props.setModal}
            currentUser={props.currentUser}
            userConversations={props.userConversations}
            users={props.users}
            setParticipant={props.setParticipant}
        />
    </aside>
}
export default AsideMenu