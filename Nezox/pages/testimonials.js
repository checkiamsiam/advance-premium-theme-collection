import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const Testimonials = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Testimonials" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Testimonials" 
            /> 

            <div className="testimonials-area testimonials-page-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What Our Customers Say</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="testimonials-item">
                                <i className="flaticon-quote"></i>
                                <p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
                                
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Jastin Anderson</h3>
                                <span>CEO</span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="testimonials-item">
                                <i className="flaticon-quote"></i>
                                <p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
                                
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Juhon Anderson</h3>
                                <span>Manager</span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="testimonials-item">
                                <i className="flaticon-quote"></i>
                                <p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
                                
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Kliva</h3>
                                <span>Marketer</span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="testimonials-item">
                                <i className="flaticon-quote"></i>
                                <p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
                                
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Jon Smith</h3>
                                <span>CEO IT</span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="testimonials-item">
                                <i className="flaticon-quote"></i>
                                <p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
                                
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Admam Smith</h3>
                                <span>Covered</span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="testimonials-item">
                                <i className="flaticon-quote"></i>
                                <p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
                                
                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <h3>Alex</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </React.Fragment>
    )
}

export default Testimonials;