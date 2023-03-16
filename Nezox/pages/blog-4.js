import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';

const Blog = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Blog Left Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Left Sidebar" 
            /> 

            <div className="blog-column-two-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-posts">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog-4.jpg" alt="Image" />
                                            </a>
                                        </Link>

                                        <div className="single-blog-content">
                                            <span>Security</span>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        The Essentials of Cybersecurity Solutions
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Carl Bradshaw
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    Sep 20, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-posts">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog-5.jpg" alt="Image" />
                                            </a>
                                        </Link>

                                        <div className="single-blog-content">
                                            <span>Security</span>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Top 10 Cybersecurity Tips for Working Place
                                                    </a>
                                                </Link>
                                            </h3>
        
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        William Gordon
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    Sep 19, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-posts">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog-6.jpg" alt="Image" />
                                            </a>
                                        </Link>

                                        <div className="single-blog-content">
                                            <span>Security</span>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Cloud Network Detection and Response
                                                    </a>
                                                </Link>
                                            </h3>
        
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Brian Eortiz
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    Sep 18, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-posts">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog-7.jpg" alt="Image" />
                                            </a>
                                        </Link>

                                        <div className="single-blog-content">
                                            <span>Security</span>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Don’t Forget Cybersecurity on Your Computer
                                                    </a>
                                                </Link>
                                            </h3> 

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Daniel Brady
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    Sep 17, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-posts">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog-8.jpg" alt="Image" />
                                            </a>
                                        </Link>

                                        <div className="single-blog-content">
                                            <span>Security</span>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        Top 5 Cybersecurity Threats in 2020
                                                    </a>
                                                </Link>
                                            </h3>
        
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Bradshaw
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    Sep 16, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-posts">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog/blog-9.jpg" alt="Image" />
                                            </a>
                                        </Link>

                                        <div className="single-blog-content">
                                            <span>Security</span>

                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>
                                                        The Essentials of Cybersecurity Solutions
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Carl Bradshaw
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    Sep 15, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="pagination-area">
                                        <a href="#" className="prev page-numbers">
                                            <i className="bx bx-chevron-left"></i>
                                        </a>
                                
                                        <span className="page-numbers current" aria-current="page">1</span>
                                        <a href="#" className="page-numbers">2</a>
                                        <a href="#" className="page-numbers">3</a>
                                        
                                        <a href="#" className="next page-numbers">
                                            <i className="bx bx-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default Blog;