import AsideMenu from "./AsideMenu"

function MainPageAside(props) {
    return <div className="main-wrapper">
        {/* <!-- Side Panel --> */}
        <AsideMenu currentUser={props.currentUser} />
    </div>
}
export default MainPageAside