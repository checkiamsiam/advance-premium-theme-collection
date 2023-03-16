import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Cyber Security Services</span>
					<h2>You Can Protect Your Organization’s Cybersecurity By Services Us</h2>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-1.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>
							<div className="services-content">
								<h3>
                                    <Link href="/services-details">
                                        <a>Website Scanning</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
                                <Link href="/services-details">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-2.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>
							<div className="services-content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Malware Removal</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<Link href="/services-details">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-3.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>
							<div className="services-content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Cloud Security</a>
                                    </Link>
                                </h3> 
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<Link href="/services-details">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
                                <Link href="/services-details">
                                    <a>
                                        <img src="/images/services/services-4.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>
							<div className="services-content">
                                <h3>
                                    <Link href="/services-details">
                                        <a>Data Protection</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<Link href="/services-details">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Services;