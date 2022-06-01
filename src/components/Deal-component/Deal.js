import Personel from './DealCard-components/Personel'
import Regular from './DealCard-components/Regular'
import Premium from './DealCard-components/Premium'
const Deal = () => {
    return <>
        <div id='Deal' className='my-5 d-flex align-items-center justify-content-center flex-column'>
            <h1 className='title-heading text-center text-light m-4'>Get Your Best Deal</h1>
            <div className='container-fluid d-flex justify-content-around'>
                <div className="row d-flex flex-column flex-md-row">
                    <Personel />
                    <Regular />
                    <Premium />

                </div>


            </div>
        </div>

    </>
}
export default Deal