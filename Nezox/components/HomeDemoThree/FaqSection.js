import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqSection = () => {
    return (
        <div className="faq-area white-bg ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="faq-img">
							<img src="/images/faq-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="faq-accordion">
							<div className="faq-title">
								<h2>Frequently Asked Questions</h2>
								<span>Just Find Your Answers Below</span>
							</div>
 
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is a Managed Security Service?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Why Do We Need Cyber Security?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What is Theaa Best Way to Learn Cyber security?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
 
                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How Do i Secure My Computer?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What Are Thea Costs of a Cyber Attack?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="f">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How Can i Safely Browse The Internet?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
						</div>
					</div>
				</div>
			</div>

			<div className="faq-right-shape shape-three">
				<img src="/images/faq-right-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default FaqSection;