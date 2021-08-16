import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            {/* --------------- main header left side-------- */}
                            <h1 className="display-2">
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus atque, quo maiores porro error sed, natus officiis ratione, aliquid nisi perspiciatis inventore dicta incidunt hic rem quasi repellendus fugiat ullam?
                            </p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 p-3 form-control-text" />
                                <div className="input-group-text">
                                    Get it now
                                </div>
                            </div>
                            {/* --------------- main header right side-------- */}
                            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
                            <img src="./image/hero1.jpg" alt="heroimg" className="img-fluid" />
                            <img src="./image/hero4.jpg" alt="heroimg4" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
