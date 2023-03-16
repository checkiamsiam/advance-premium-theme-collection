import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-left-content">
                            <li>
                                <i className="bx bx-phone-call"></i>
                                <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-right-content">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;