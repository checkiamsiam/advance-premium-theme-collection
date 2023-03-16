import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const SolutionDetails = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Solution Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Solution Details" 
            /> 

            <div className="solution-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="solutions-content">
                                <h3>Our Cyber Security Solutions</h3>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="solution-details-one">
                                <img src="/images/solution-details/solution-details-1.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="solutions-content two">
                                <h3>Nezox is Changinga The World of Cybersecurity</h3>
                                
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="solutions-content three">
                                <h3>Solutions For Everyone</h3>
                                
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="solutions-content four">
                                <h3>Security Challenge</h3>
                                
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <ul>
                                    <li>
                                        <i className="bx bx-check-circle"></i>
                                        Identifying threats
                                    </li>
                                    <li>
                                        <i className="bx bx-check-circle"></i>
                                        Mitigating cyber security risk
                                    </li>
                                    <li>
                                        <i className="bx bx-check-circle"></i>
                                        Protecting  malware
                                    </li>
                                    <li>
                                        <i className="bx bx-check-circle"></i>
                                        Defending  insider threats
                                    </li>
                                    <li>
                                        <i className="bx bx-check-circle"></i>
                                        Securing remote workers
                                    </li>
                                    <li>
                                        <i className="bx bx-check-circle"></i>
                                        Testing cyber security
                                    </li>
                                </ul>

                                <div className="challenge-btn">
                                    <a href="#" className="default-btn overly-one">
                                        <span>Talk To Expert</span>
                                    </a>

                                    <a href="#" className="default-btn overly-one two">
                                        <span>Talk To Expert</span>
                                    </a>
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

export default SolutionDetails;