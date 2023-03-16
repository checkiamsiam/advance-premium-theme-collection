import React from 'react';

const Features = () => {
    return (
        <div className="feature-area feature-area-four pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i className="flaticon-testing"></i>
									<h3>Pen Testing</h3>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i className="flaticon-cybercrime"></i>
									<h3>Cyber Threat Hunting</h3>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i className="flaticon-cyber-security"></i>
									<h3>Security Center</h3>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;