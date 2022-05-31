import FooterLogo from '../../Assets/Logo/logo_light.svg'
const Footer = () => {
    return <>
        <div id='footer-email' className='my-5 d-flex align-items-center justify-content-center flex-column'>
            <h1 className="title-heading text-center text-light m-4">Join us on email for</h1>
            <h1 className="title-heading text-center mb-5 ">more information</h1>
            <button className='btn btn-light mt-5 rounded-pill title-body p-3' >Join Now</button>
        </div>
        <div id="footer-links" className='px-5 d-flex align-items-center justify-content-between'>
            <img src={FooterLogo} alt='Footer Logo'></img>
            <div className='links d-flex'>
                <p>Privacy Policy </p>
                <p>Term and conditions </p>
                <p>Contact Us</p>
                <p>Career</p>
            </div>

        </div>
        
    </>
}
export default Footer
