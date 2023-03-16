import React from 'react';
import { 
    resetIdCounter, 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel 
} from 'react-tabs';
resetIdCounter();

const AboutUs = () => {
    return (
        <div className="about-us-area pb-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img mb_30">
							<img src="/images/about-img-5.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-content">
							<div className="about-title">
								<span>About Us</span>
								<h2>Without stopping for a moment we give you best technology experience discussing from our expertise to stop threats being theft or damaged.</h2>
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
                                            System Security
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
                                            Product Security
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                    <p>Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Trusted Partner
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            System Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Product Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Operational Security
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit.</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            System Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Product Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Trusted Partner
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

export default AboutUs;