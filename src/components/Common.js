import React from 'react';
import bg from './Images/avatar.png'

const Common = (props) => {
    return (
        <>
        <section id = "header" className='d-flex align-items-center'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name}<strong className='brand-name'> Healthicious </strong></h1>
                        <h2 className='my-3'>
                            {props.sub}
                        </h2>
                        <div className="mt-3">
                            <a href={props.visit} className='btn-get-started'>{props.btname}</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className='img-fluid animated' alt = "homeimg"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Common