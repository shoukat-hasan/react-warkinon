import React from 'react'
import { styles } from './Solve.css'
import line from '../../assets/images/Rectangle 5180.svg'
import circle from '../../assets/images/Ellipse 9.svg'
import arrow from '../../assets/images/Rectangle 5174.svg'
import smallCircle from '../../assets/images/Ellipse 1.svg'
import tick from '../../assets/images/Rectangle 4586.svg'
import rightArrow from '../../assets/images/Vector 1828.svg'

const Solve = () => {
    return (
        <div class="container">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
                <div class="col-lg-6 p-0">
                    <div>
                        <div className="d-flex justify-content-center">
                            <span className='text-white me-2 mt-2 fs-4'>01</span>
                            <img src={line} className='mb-2' alt="line" />
                            <div className="position-relative ms-3">
                                <img src={circle} className='pb-3 ps-2 img-fluid' alt="circle" />
                                <div className="position-absolute top-0 start-50 mt-2">
                                    <img src={arrow} className='img-fluid' alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='fs-4 fw-bold text-white ms-4 ps-3 pt-0'>UI/UX Design</p>
                            <div className="d-flex justify-content-between ms-4 ps-3 pe-5">
                                <div className='d-flex justify-content-between'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>Web Design</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>App Design</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>Dashboard Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <span className='text-color me-2 mt-1 fs-4'>02</span>
                            <img src={line} className='mb-2' alt="line" />
                            <div className="position-relative ms-3">
                                <img src={circle} className='pb-3 ps-2 img-fluid' alt="circle" />
                                <div className="position-absolute top-0 start-50 mt-2">
                                    <img src={arrow} className='img-fluid' alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='fs-4 fw-bold text-white ms-4 ps-3 pt-0'>Development</p>
                            <div className="d-flex justify-content-start ms-4 ps-3 pe-5">
                                <div className='d-flex justify-content-start'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>Web Development</span>
                                </div>
                                <div className='d-flex justify-content-start ms-3'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>App Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <span className='text-color me-2 mt-1 fs-4'>03</span>
                            <img src={line} className='mb-2' alt="line" />
                            <div className="position-relative ms-3">
                                <img src={circle} className='pb-3 ps-2 img-fluid' alt="circle" />
                                <div className="position-absolute top-0 start-50 mt-2">
                                    <img src={arrow} className='img-fluid' alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='fs-4 fw-bold text-white ms-4 ps-3 pt-0'>Branding</p>
                            <div className="d-flex justify-content-start ms-4 ps-3 pe-5">
                                <div className='d-flex justify-content-start'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>Brand Logo</span>
                                </div>
                                <div className='d-flex justify-content-start ms-3'>
                                    <div className="position-relative">
                                        <img src={smallCircle} alt="circle" />
                                        <div className="position-absolute top-0 ms-1">
                                            <img src={tick} alt="Tick" />
                                        </div>
                                    </div>
                                    <span className='text-white ms-3'>Brand Promotion</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-5 ms-3 mt-3 p-4">
                    <h1 class="display-4 fw-bold lh-3 text-white">Solving problems by the services</h1>
                    <p class="text-white lh-3">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" class="btn secondary-bg-color text-white fw-bold px-3 py-2">Learn More <img src={ rightArrow} alt="" /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Solve;