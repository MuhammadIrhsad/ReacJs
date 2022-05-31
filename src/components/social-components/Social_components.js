// import react from "react";
import linksImag from '../../Assets/social_links.svg'
const Social = () => {
    return <>
        <div id='links' className='my-5 d-flex align-items-center justify-content-center flex-column'>
            <h1 className="title-heading text-center m-4">Social Media Links</h1>
            <h1 className="title-body text-center mb-5 ">Feel Free TO Contact Us</h1>
            <div className='linksImage'>
                <img src={linksImag} height='100%' width='100%' alt='Company Logo' ></img>
            </div>
            <button className='btn btn-primary mt-5 rounded-pill title-body p-3' >Get Started</button>
        </div>
        
    </>
}
export default Social