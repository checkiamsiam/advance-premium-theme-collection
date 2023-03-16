import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area banner-area-three">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="banner-content">
									<span className="top-title">World Class Cyber Security</span>
									<h1>Cyber Security & IT Management</h1>
									<p>Cyber security is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.</p>
                                    
									<div className="banner-btn">
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                <span>Contact Us</span>
                                            </a>
                                        </Link>
									</div>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="banner-img">
									<img src="/images/banner/banner-img.png" alt="Image" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default MainBanner;