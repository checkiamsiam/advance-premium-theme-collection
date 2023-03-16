import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area banner-area-five bg-5 jarallax">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="banner-content">
							<img src="/images/banner/banner-logo.png" alt="Image" />

							<span className="top-title">World Class Cyber Security</span>
							<h1>Real-Time Monitoring Your Infrastructure</h1>
							<p>Cyber security is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.</p>

							<div className="banner-btn">
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        <span>About Us</span>
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

export default MainBanner;