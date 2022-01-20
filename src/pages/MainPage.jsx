
import MainChat from "../components/MainChat/MainChat"
import AsideMenu from "./AsideMenu"

function MainPage(props) {

    return <div className="main-wrapper">
        {/* <!-- Side Panel --> */}
        <AsideMenu currentUser={props.currentUser} />

        {/* <!-- Main Chat Section --> */}


    </div>

}
export default MainPage