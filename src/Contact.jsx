import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect with our <br /> sales team.
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur asperiores excepturi expedita vel voluptas enim doloribus
                                    </p>
                                    <figure>
                                        <img src="./image/hero1.jpg" alt="contactusImg" className="img-fluid" />
                                    </figure>
                                </div>
                                {/* contact form */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="" id="" className="form-control" placeholder="First name" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="" id="" className="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="" id="" className="form-control" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="" id="" className="form-control" placeholder="Email ID" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" name="" id="" className="form-control" placeholder="Add Address" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" name="" id="" className="form-control" placeholder="Enter Your Message" />
                                            </div>
                                        </div>
                                        <div className="form-check form-check-style">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label main-hero-para" for="flexCheckChecked">
                                                I agree that the EyPay may contact me at the email address or phone number above
                                            </label>
                                        </div>
                                        <button type="button" className="btn btn-style w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
