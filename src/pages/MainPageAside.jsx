import AsideMenu from "./AsideMenu"

function MainPageAside(props) {
    return <div className="main-wrapper">
        {/* <!-- Side Panel --> */}
        <AsideMenu currentUser={props.currentUser} setModal={props.setModal} />
    </div>
}
export default MainPageAside