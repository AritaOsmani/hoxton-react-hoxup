
import MainChat from "../components/MainChat/MainChat"
import AsideMenu from "./AsideMenu"

function MainPage() {

    return <div className="main-wrapper">
        {/* <!-- Side Panel --> */}
        <AsideMenu />

        {/* <!-- Main Chat Section --> */}
        <MainChat />

    </div>

}
export default MainPage