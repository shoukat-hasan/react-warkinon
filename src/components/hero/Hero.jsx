import React from 'react'
import Elispe from '../../assets/images/Ellipse 2663.svg'
import Boy from '../../assets/images/image 784.svg'
import { style } from './Hero.css'

const Hero = () => {
    return (
        <div class="container col-xxl-8 px-4 py-5 mb-0">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <div className='position-relative'>
                        <img src={Elispe} class="img-fluid mt-5 circle-img" alt="Circle" />
                        <div className='position-absolute top-0 p-1 ms-3'>
                            <img src={Boy} class="img-fluid ms-3  boy-img" alt="Boy" />
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-white mb-3">I am <span className='primary-color'>William</span> a UX Designer from the Bronx</h1>
                    <p class="text-white">Hi, my name is Alex Smith and I love creating unique interfaces using code. Pixel perfect every time just try me out.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn primary-bg-color text-white fw-bold btn-lg px-4 me-md-2"> - My Works</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;