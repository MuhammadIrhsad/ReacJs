import Home_right from './home-right/Home_right';
import Home_left from './home_left.js/Home_left';
import Home_bottom from './home-bottom/home_bottom';
// import {  } from "@react-icons/all-files/";
// import { ArrowIcon } from "react-icons/di";
const home = () => {
    return <section id="home" className='d-flex justify-content-center align-items-center'>
        <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center">
                <Home_right />
                <Home_left />

            </div>
            <Home_bottom />
            
        </div>
    </section>
}
export default home;