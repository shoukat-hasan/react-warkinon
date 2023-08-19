import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import { style } from './Header.css'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis">
                        <img src={ Logo } alt="Logo" />
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-decoration-underline active-btn">Home</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Case Studies</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Blog</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Services</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn primary-bg-color text-white mx-2 px-3 py-1">Contact</button>
                </div>
            </header>
        </div>
    )
}

export default Header;