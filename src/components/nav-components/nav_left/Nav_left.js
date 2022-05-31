import React from "react";
import companyLogo from '../../../Assets/Logo/logo.svg'
const Nav_left = () => {
    return <>
        <a class="navbar-brand ms-md-5" href="#">
                <img className="text-light" src={companyLogo} alt=""  class="d-inline-block align-text-top" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    </>
    
}
export default Nav_left;