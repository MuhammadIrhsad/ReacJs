// import react from "react";
import sponsorImag from '../../Assets/companies.svg'
const Companies = () => {
    return <>
        <div id='companies' className='my-5 d-flex align-items-center justify-content-center flex-column'>
            <h1 className="title-heading text-center m-4">We helped more than 1000 companies</h1>
            <div className=' comapnyImage'>
                <img src={sponsorImag} height='100%' width='100%' alt='Company Logo' ></img>
            </div>
        </div>
        
    </>
}
export default Companies