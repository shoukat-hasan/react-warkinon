import React from 'react'
import logo from '../../assets/images/Group 17826.svg'
import Icon from '../../assets/images/ICON.svg'
import { styles } from './Footer.css';

const Footer = () => {
    return (
        <div className='container my-3'>
            <div className="row mt-5">
                <div className="col-lg-5">
                    <div className="container">
                        <img src={logo} alt="Logo" />
                        <p className='text-white mt-5'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffere
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 mx-4">
                    <p className='text-white fs-3'>Newsletter</p>
                    <input type="email" className='mt-5 input-bg p-2' placeholder='Submit your email...' />
                </div>
                <div className="col-lg-2">
                    <p className='text-white fs-3 mt-3 text-center'>Follow Me</p>
                    <img src={ Icon } className='mt-5 d-flex justify-content-center' alt="icons" />
                </div>
            </div>

        </div>
    )
}

export default Footer;