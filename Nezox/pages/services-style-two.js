import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const ServicesStyleTwo = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Services Style Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style Two" 
            /> 

            <div className="safety-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Cybersecurity Services</span>
                        <h2>You Can Protect Your Organization’s Cybersecurity by Services Us</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-safety overly-one">
                                <div className="overly-two">
                                    <img src="/images/safety-icon/icon-1.png" alt="Image" />

                                    <Link href="/services-details">
                                        <a>
                                            <h3>Check Website Url</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-safety overly-one">
                                <div className="overly-two">
                                    <img src="/images/safety-icon/icon-2.png" alt="Image" />

                                    <Link href="/services-details">
                                        <a>
                                            <h3>Check Emails Before Opening Them</h3>
                                        </a>
                                    </Link>
 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-safety overly-one">
                                <div className="overly-two">
                                    <img src="/images/safety-icon/icon-3.png" alt="Image" />

                                    <Link href="/services-details">
                                        <a>
                                            <h3>Remember To Log Off</h3>
                                        </a>
                                    </Link>
 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-safety overly-one">
                                <div className="overly-two">
                                    <img src="/images/safety-icon/icon-4.png" alt="Image" />

                                    <Link href="/services-details">
                                        <a>
                                            <h3>Choose Strong Passwords</h3>
                                        </a>
                                    </Link>
 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-safety overly-one">
                                <div className="overly-two">
                                    <img src="/images/safety-icon/icon-5.png" alt="Image" />

                                    <Link href="/services-details">
                                        <a>
                                            <h3>Shop Safety In Trusted Websites</h3>
                                        </a>
                                    </Link>
 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-safety overly-one">
                                <div className="overly-two">
                                    <img src="/images/safety-icon/icon-6.png" alt="Image" />

                                    <Link href="/services-details">
                                        <a>
                                            <h3>Update Your Antivirus</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            <Footer />
        </React.Fragment>
    )
}

export default ServicesStyleTwo;