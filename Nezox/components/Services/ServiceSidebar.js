import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
    return (
        <div className="services-sidebar">
            <div className="services-category">
                <ul>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Cyber Security <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Network Security
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Threat Hunter
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Incident Responder
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Secure Managed IT
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Server Monitoring
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>
                                Penetration Testing
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="services-pdf">
                <ul>
                    <li>
                        <a href="#">
                            <i className="bx bxs-file-pdf"></i>
                            PDF Download
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-file-doc"></i>
                            DOC Download
                        </a>
                    </li>
                </ul>
            </div>

            <div className="services-contact mb-30">
                <h3>Contact us to do Your New Projects</h3>

                <Link href="/contact">
                    <a className="default-btn">
                        <span>Contact Us</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ServiceSidebar;