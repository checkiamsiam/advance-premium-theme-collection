import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Footer from '../components/_App/Footer';

const Blog = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Blog Column One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Column One" 
            /> 

            <div className="blog-column-one-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
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

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. consectetuer adipiscing elit</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Posted by: Carl Bradshaw
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    September 20, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
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
                                                        Top 10 Cybersecurity Tips For Working Place
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. consectetuer adipiscing elit</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Posted by: William Gordon
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    September 19, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
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
                                                        Cloud Network Detection And Rsponse
                                                    </a>
                                                </Link>
                                            </h3>

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. consectetuer adipiscing elit</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Posted by: Brian Eortiz
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    September 18, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
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

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. consectetuer adipiscing elit</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Posted by: Daniel Brady
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    September 17, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
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

                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis mod tincidunt ut laoreet dolore magna aliquam erat volutpat. consectetuer adipiscing elit</p>
                                                
                                            <ul className="admin">
                                                <li> 
                                                    <a href="#">
                                                        <i className="bx bx-user-circle"></i>
                                                        Posted by: Bradshaw
                                                    </a>
                                                </li>
                                                <li className="float">
                                                    <i className="bx bx-calendar-alt"></i>
                                                    September 16, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
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
                        
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </React.Fragment>
    )
}

export default Blog;