import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items: 2,
        },
        576:{
            items: 3,
        },
        768:{
            items: 4,
        },
        1200:{
            items: 5,
        }
    }
};

const PartnersTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area bg-color ptb-100">
			<div className="container">
                {display ? <OwlCarousel 
                    className="partner-slide owl-carousel owl-theme"
                    {...options}
                >
					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/images/partner/partner-1.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/images/partner/partner-2.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/images/partner/partner-3.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/images/partner/partner-4.png" alt="Image" />
						</a>
					</div>

					<div className="partner-item">
						<a href="#" target="_blank">
							<img src="/images/partner/partner-5.png" alt="Image" />
						</a>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default PartnersTwo;