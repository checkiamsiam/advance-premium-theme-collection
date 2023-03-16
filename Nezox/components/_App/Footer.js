import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
       <React.Fragment>
           <footer className="footer-area pt-100 pb-70 jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/images/logo.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consec tetur adipiscing.</p>

                                <ul className="social-icon">
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
                                            <i className="bx bxl-linkedin-square"></i>
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

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>

                                <ul className="address">
                                    <li className="location">
                                        <i className="bx bxs-location-plus"></i>
                                        6890 Blvd, The Bronx, NY 1058 New York, USA
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"></i>
                                        <a href="mailto:hello@nezox.com">hello@nezox.com</a>
                                        <a href="#" target="_blank">skype: example</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"></i>
                                        <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                                        <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Solution</h3>

                                <ul className="import-link">
                                    <li>
                                        <Link href="/solution-details">
                                            <a>Secure Private Cloud</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solution-details">
                                            <a>Online Backup</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solution-details">
                                            <a>Secure Websites</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solution-details">
                                            <a>Cyber-Security</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solution-details">
                                            <a>Enterprise Networks</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solution-details">
                                            <a>Collaboration</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Resources</h3>

                                <ul className="import-link">
                                    <li>
                                        <Link href="/services-details">
                                            <a>Cybersecurity Strategies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Security Advisories</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Security News</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-1">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions">
                                            <a>Case Studies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>User Guides</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
            <div className="copy-right-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright &copy; {currentYear} Nezox. Designed <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul className="footer-menu">
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </React.Fragment>
    );
}

export default Footer;