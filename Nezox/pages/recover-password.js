import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const RecoverPassword = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Recover Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Recover Password" 
            /> 
 
            <div className="user-area-style recover-password-area ptb-100">
                <div className="container">
                    <div className="contact-form-action recover">
                        <div className="form-heading text-center">
                            <h3 className="form-title">Reset Password!</h3>
                            <p className="reset-desc">Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <Link href="/contact"><a>contact us.</a></Link></p>
                        </div>

                        <form method="post">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Enter Email Address" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-sm-6">
                                    <Link href="/log-in">
                                        <a className="now-log-in font-q">Log In Your Account</a>
                                    </Link>
                                </div>
                                
                                <div className="col-lg-6 col-sm-6">
                                    <p className="now-register">
                                        Not a Member? <Link href="/register"><a className="font-q">Register</a></Link>
                                    </p>
                                </div>

                                <div className="col-12 text-center">
                                    <button className="default-btn" type="submit">
                                        <span>Reset Password</span>
                                    </button>
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

export default RecoverPassword;