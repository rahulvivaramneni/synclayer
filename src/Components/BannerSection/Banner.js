import React, { useEffect } from 'react'
import LineGraphic from "../../Assets/Images/banner-line.svg"
import LineGraphics from "../../Assets/Images/banner-line-mb.svg"
import Logo from "../../Assets/Images/logo.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='banner-section dark-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='logo-div'>
                            <a href="#"><img src={Logo} alt="Logo" /></a>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col-12 order-lg-1 order-1'>
                        <h1 className='heading large text-xxl-center m-0 ps-xxl-0 ps-5'>Building</h1>
                        <h2 className='heading large d-flex'><span>Trust</span><img className='d-md-block d-none' src={LineGraphic} alt="Line Graphic" /><img className='d-md-none d-block' src={LineGraphics} alt="Line Graphic" /></h2>

                    </div>
                    <div className='col-lg-6 order-lg-2 order-3'>
                        <div className='para-content'>
                            <p className='text-white'>
                                Empowering decentralized networks with seamless, user-centric device validation. A future where security meets trust.
                            </p>

                            <button className='common-button border-0'>GET STARTED</button>
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-3 order-2'>
                        <h2 className='heading large text-md-start text-end'>at <span>scale</span></h2>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner