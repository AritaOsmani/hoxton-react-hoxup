function AsideMenu(props) {
    return <aside>
        {/* <!-- Side Header --> */}
        <header className="panel">
            <img
                className="avatar"
                width="50"
                height="50"
                src={props.currentUser.avatar}
                alt=""
            />
            <h3>{`${props.currentUser.firstName} ${props.currentUser.lastName}`}</h3>
        </header>

        {/* <!-- Search form --> */}
        <form className="aside__search-container">
            <input
                type="search"
                name="messagesSearch"
                placeholder="Search chats"
                value=""
            />
        </form>

        {/* <!--

    Side Chat List goes here. Check side-chat-list.html

-->
    <!--  --> */}
    </aside>
}
export default AsideMenu