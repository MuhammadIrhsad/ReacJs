import react from 'react'
import About from '../nav-links/About'
import How from '../nav-links/How'
import Price from '../nav-links/Price'
import Feature from '../nav-links/Feature'
import Solution from '../nav-links/Solution'
// import Price from '../nav-links/Price'
const Nav_center = () => {
    return <ul className="navbar-nav ">
        <About/>
        <How/>
        <Price />
        <Solution/>
        <Feature/>

    </ul>
}
export default Nav_center;