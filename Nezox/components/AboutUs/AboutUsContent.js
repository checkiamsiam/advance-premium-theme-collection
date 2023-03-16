import React from 'react';
import { 
    resetIdCounter, 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel 
} from 'react-tabs';
resetIdCounter();

const AboutUsContent = () => {
    return (
        <div className="about-us-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img mb_30">
							<img src="/images/about-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-content">
							<div className="about-title">
								<span>About Us</span>
								<h2>Without Stopping For a Moment We Give You Best Technology Experience Discussing From Our Expertise to Stop Threats Being Theft or Damaged.</h2>
							</div>
 
                            <Tabs>
                                <TabList>
                                    <Tab>Our Experience</Tab>
                                    <Tab>Why Us?</Tab>
                                    <Tab>Our Approach</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit.</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Trusted Partner
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Product Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            System Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Operational Security
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Product Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Operational Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Trusted Partner
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            System Security
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Trusted Partner
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Product Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            System Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Operational Security
                                        </li>
                                    </ul>
                                </TabPanel>
                            </Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;