import React from 'react'
import { styles } from './Services.css'
import Vector from '../../assets/images/Vector.svg'
import M from '../../assets/images/ph_article-medium-light.svg'
import SEO from '../../assets/images/seo-search-symbol (1) 1.svg'
import Table from '../../assets/images/hierarchical-structure 1.svg'

const Services = () => {
    return (
        <div className='container my-5'>
            <div className='text-center my-4 fw-bold'>
                <p className='primary-color mb-3'>My Services</p>
                <span className='fs-4 text-white'>Why hire me for your next project</span>
            </div>
            <div className='d-flex justify-content-center my-5'>
                <div className="card mx-3 px-3 py-3">
                    <div className='position-relative'>
                        <img src={Vector} alt="vector" />
                        <div className='position-absolute top-0'>
                            <img src={M} className='img-fluid ms-2 mt-2' alt="article medium light" />
                        </div>
                    </div>
                    <span className='fw-bold my-2 text-white'>Blog Articles</span>
                    <p className='text-white'>Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.</p>
                </div>
                <div className="card mx-3 px-3 py-3">
                    <div className='position-relative'>
                        <img src={Vector} alt="vector" />
                        <div className='position-absolute top-0'>
                            <img src={ SEO } className='img-fluid ms-2 mt-2' alt="article medium light" />
                        </div>
                    </div>
                    <span className='fw-bold my-2 text-white'>SEO strategy</span>
                    <p className='text-white'>Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.</p>
                </div>
                <div className="card mx-3 px-3 py-3">
                    <div className='position-relative'>
                        <img src={Vector} alt="vector" />
                        <div className='position-absolute top-0'>
                            <img src={ Table } className='img-fluid ms-2 mt-2' alt="article medium light" />
                        </div>
                    </div>
                    <span className='fw-bold my-2 content-color'>Content architecture</span>
                    <p className='text-white'>Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.</p>
                </div>
            </div>

        </div>
    )
}

export default Services