import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import GetInTouchFormTwo from '../components/Common/GetInTouchFormTwo';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Faq = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Faq's" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Faq's" 
            /> 

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
                                                What is a managed security service?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Why do we need cybersecurity?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What is theaa best way to learn cybersecurity?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How do i secure my computer?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What are theaa costs of a cyber attack?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis quisquam quam asperiores veritatis, earum quibusdam laudantium distinctio dolore placeat recusandae ratione maxime odit delectus nobis doloribus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in, illo blanditiis</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="f">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How can i safely browse the internet?
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

            <GetInTouchFormTwo />
  
            <Footer />
        </React.Fragment>
    )
}

export default Faq;