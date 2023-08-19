import React from 'react'
import { style } from './Comment.css'
import rightComa from '../../assets/images/Vector 1.svg'
import leftComa from '../../assets/images/Vector 2.svg'
import manImg from '../../assets/images/Group 5700.svg'
import manImg2 from '../../assets/images/Group 5701.svg'
import dot1 from '../../assets/images/Rectangle 4509.svg'
import dot2 from '../../assets/images/Rectangle 4510.svg'



const Comment = () => {
    return (
        <div className='container'>
            <div className="mx-5 px-5">
                <div className="text-center">
                    <p className='display-4 text-white fw-bold'>What People Say</p>
                    <p className='text-white fs-4 p x-5 text-center'>Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness today.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-lg-5">
                    <div className="card-text position-relative">
                        <p className='text-white ms-4 p-3'>I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.</p>
                        <div className="position-absolute top-50 end-0 mx-2 mt-4">
                            <img src={leftComa} className='' alt="" />
                        </div>
                        <div className='position-absolute top-0 mx-2'>
                            <img src={rightComa} alt="" />
                        </div>
                    </div>
                    <div className="d-flex Justify-content-start">
                        <img src={manImg} className='img-fluid' alt="" />
                        <div className="container">
                            <p className='text-white fw-bold fs-5 mt-3 mx-3'>Ben Stokes</p>
                            <p className='text-white-50 fs-6 lh-2 mx-3'>Member</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card-text position-relative">
                        <p className='text-white ms-4 p-3'>I have been taking gym and fitness training here since a long time and I found here so much easy, comfort and flexibility. The mentors are so good and they train me very well.</p>
                        <div className="position-absolute top-50 end-0 mx-2 mt-4">
                            <img src={leftComa} className='' alt="" />
                        </div>
                        <div className='position-absolute top-0 mx-2'>
                            <img src={rightComa} alt="" />
                        </div>
                    </div>
                    <div className="d-flex Justify-content-start">
                        <img src={ manImg2 } className='img-fluid' alt="" />
                        <div className="container">
                            <p className='text-white fw-bold fs-5 mt-3 mx-3'>Ben Fokes</p>
                            <p className='text-white-50 fs-6 lh-2 mx-3'>Member</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <img src={ dot1 } className='mx-1' alt="" />
                <img src={ dot2 } className='mx-1' alt="" />
                <img src={ dot2 } className='mx-1' alt="" />
            </div>

        </div>
    )
}

export default Comment;