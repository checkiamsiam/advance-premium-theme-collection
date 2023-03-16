import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Services from '../components/Services/Services';
import Footer from '../components/_App/Footer';

const ServicesStyleOne = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Services Style One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style One" 
            /> 

            <div className="feature-area feature-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-feature overly-one">
                                <div className="overly-two">
                                    <div className="title">
                                        <i className="flaticon-testing"></i>
                                        <h3>Pen Testing</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    
                                    <div className="feature-shape">
                                        <img src="/images/feature-shape.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-feature overly-one">
                                <div className="overly-two">
                                    <div className="title">
                                        <i className="flaticon-cybercrime"></i>
                                        <h3>Cyber Threat Hunting</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    
                                    <div className="feature-shape">
                                        <img src="/images/feature-shape.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-feature overly-one">
                                <div className="overly-two">
                                    <div className="title">
                                        <i className="flaticon-cyber-security"></i>
                                        <h3>Security Center</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    
                                    <div className="feature-shape">
                                        <img src="/images/feature-shape.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Services />
        
            <Footer />
        </React.Fragment>
    )
}

export default ServicesStyleOne;