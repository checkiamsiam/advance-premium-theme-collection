import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Register = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Register" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Register" 
            /> 

            <div className="user-area-style ptb-100">
                <div className="container">
                    <div className="contact-form-action">
                        <div className="account-title">
                            <h2>Register</h2>
                        </div>

                        <form method="post">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input className="form-control" type="text" name="name" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="form-control" type="email" name="email" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Mobile NO.</label>
                                        <input className="form-control" type="text" name="Number" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" type="text" name="password" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-sm-6">
                                            <button className="default-btn register" type="submit">
                                                <span>Register now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <p>Have an Account? <Link href="/log-in"><a>Login Now!</a></Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default Register;