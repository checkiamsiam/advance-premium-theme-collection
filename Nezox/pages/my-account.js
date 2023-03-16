import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const MyAccount = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Account" 
            /> 

            <div className="user-area-style ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form-action mb-50">
                                <div className="account-title">
                                    <h2>Log in</h2>
                                </div>

                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Email or Phone</label>
                                                <input className="form-control" type="text" name="name" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="form-control" type="password" name="password" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="login-action">
                                                <span className="log-rem">
                                                    <input id="remember" type="checkbox" />
                                                    <label htmlFor="remember">Remember me!</label>
                                                </span>
                                                
                                                <span className="forgot-login">
                                                    <Link href="/recover-password">
                                                        <a>Forgot Your Password?</a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn" type="submit">
                                                <span>Log in now</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default MyAccount;