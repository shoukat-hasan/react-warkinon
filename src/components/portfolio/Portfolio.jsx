import React from 'react'
import { styles } from './Portfolio.css'
import img1 from '../../assets/images/Rectangle 5341.svg';
import img2 from '../../assets/images/Rectangle 5342.svg';
import img3 from '../../assets/images/Rectangle 5343.svg';
import img4 from '../../assets/images/Rectangle 5344.svg';
import img5 from '../../assets/images/Rectangle 5345.svg';
import img6 from '../../assets/images/Rectangle 5346.svg';




const Portfolio = () => {
    return (
        <div className='container my-3'>
            <div className="d-flex justify-content-center mt-5 mx-5 px-5">
                <div className="mx-5">
                    <div className="text-center">
                        <span className='fw-bold display-4 text-white'>
                            Let’s a have a look at my portfolio
                        </span>
                        <p className='my-5 mx-5 px-5 fs-4 text-white'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 p-0">
                                <img src={img1} className='img-fluid' alt="image" />
                            </div>
                            <div className="col-lg-4 p-0">
                                <img src={img2} className='img-fluid' alt="image" />

                            </div>
                            <div className="col-lg-4 p-0">
                                <img src={img3} className='img-fluid' alt="image" />
                            </div>
                            <div className="col-lg-4 p-0">
                                <img src={img4} className='img-fluid' alt="image" />
                            </div>
                            <div className="col-lg-4 p-0">
                                <img src={img5} className='img-fluid' alt="image" />

                            </div>
                            <div className="col-lg-4 p-0">
                                <img src={img6} className='img-fluid' alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button type="button" class="btn secondary-bg-color text-white fw-bold px-3 py-2">VIEW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;