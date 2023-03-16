import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area ptb-100 jarallax">
			<div className="container">
				<div className="testimonials">
					<span>What our customers say</span>

                    {display ? <OwlCarousel 
                        className="testimonials-slide owl-carousel owl-theme"
                        {...options}
                    > 
						<div className="testimonials-item">
							<i className="flaticon-quote"></i>
							<p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
							
							<ul>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
							</ul>

							<h3>Jastin Anderson</h3>
							<span>CEO</span>
						</div>

						<div className="testimonials-item">
							<i className="flaticon-quote"></i>
							<p>“Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</p> 
							
							<ul>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
							</ul>

							<h3>Juhon Anderson</h3>
							<span>Manager</span>
						</div>
                    </OwlCarousel> : ''}
				</div>
			</div>
		</div>
    )
}

export default Testimonials;