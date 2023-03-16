import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const TermsConditions = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Terms & Conditions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms & Conditions" 
            />

            <div className="terms-conditions-area ptb-100">
                <div className="container">
                    <div className="terms-conditions">
                        <div className="title">
                            <span>Information & Notices</span>
                            <h2>Nezox Terms of Service</h2>
                        </div>

                        <div className="conditions-content">
                            <h3>1. Ownership of site agreement to terms of use</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

                            <ul>
                                <li>It has survived not only five centuries, but also the leap into electronic typesetting.</li>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                                <li>Various versions have evolved over the years, sometimes by accident sometimes on purpose.</li>
                            </ul>
                        </div>

                        <div className="conditions-content">
                            <h3>2. General Conditions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                        </div>

                        <div className="conditions-content">
                            <h3>3. Modifications to the Service</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                        </div>

                        <div className="conditions-content">
                            <h3>4. Entire Agreement</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>

                            <ul>
                                <li>It has survived not only five centuries, but also the leap into electronic typesetting.</li>
                                <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                                <li>Various versions have evolved over the years, sometimes by accident sometimes on purpose.</li>
                            </ul>
                        </div>

                        <div className="conditions-content">
                            <h3>5. Service Rules</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>

                        <div className="conditions-content five mb-0">
                            <h3>6. Limitation of Liability</h3>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </React.Fragment>
    )
}

export default TermsConditions;