import React from 'react'
import { style } from './Clients.css'
import object1 from '../../assets/images/Object.svg'
import object2 from '../../assets/images/Object (1).svg'
import object3 from '../../assets/images/Object (2).svg'

const Clients = () => {
    return (
        <div className='container-fluid bg-color'>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-lg-4">
                        <div className='m-4'>
                            <p className='text-white fs-3 fw-bold'>Our Trusted Clients</p>
                            <p className='text-white-50'>Proin eget tortor risus cras ultricies ligula sed portavamus suscipit tortor</p>
                        </div>
                    </div>
                    <div className="col-lg-2 my-4">
                        <img src={object1} alt="" />
                    </div>
                    <div className="col-lg-2 my-4">
                        <img src={object2} alt="" />
                    </div>
                    <div className="col-lg-2 my-4">
                        <img src={object3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients