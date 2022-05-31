import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Ucp from './components/Ucp'
import Navbar from './components/nav-components/Nav'
import Home from './components/hom-components/home'
import Coment from './components/coment-compenents/Coment'
import Sponsors from './components/Companies_components/Companies'
import Social from './components/social-components/Social_components';
import Deal from './components/Deal-component/Deal';
import Footer from './components/Footer/Footer'

const App = () => <>

    <Navbar />
    <Home />
    <Coment />
    <Sponsors />
    <Social />
    <Deal/>
    <Footer/>
</>

export default App;