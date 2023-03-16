import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area banner-area-two bg-2 jarallax">
			<div className="container">
				<div className="banner-content">
					<span className="top-title">World Class Cyber Security</span>
					<h1>Cyber Security Solutions Built On Customer Trust</h1>
					<p>Cyber security is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.</p>

                    <Link href="/about-us">
                        <a className="default-btn">
                            <span>About Us</span>
                        </a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default MainBanner;