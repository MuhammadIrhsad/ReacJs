import react from "react";

import Nav_center from "./nav_center/Nav_center";
// import Nav_right from "./Nav_right/Nav_right";
import Nav_right from './nav_right/Nav_right'
import Nav_left from "./nav_left/Nav_left"
const Nav = () => {
    return <> <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <Nav_left />
            <div className="collapse navbar-collapse d-hidden d-lg-flex align-items-center justify-content-evenly" >
                <Nav_center />
            </div >
            <Nav_right />
        </div>
    </nav>
    </>
}
export default Nav;