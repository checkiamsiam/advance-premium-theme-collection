import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Comments from '../components/Blog/Comments';
import Footer from '../components/_App/Footer';

const BlogDetails = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
            /> 

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-content">
                                <div className="blog-details-img">
                                    <img src="/images/blog-details/blog-details-img.jpg" alt="Image" />
                                </div>

                                <div className="blog-top-content">
                                    <div className="news-content">
                                        <ul className="admin">
                                            <li> 
                                                <a href="#">
                                                    <i className="bx bx-user-circle"></i>
                                                    Posted by: Carl Bradshaw
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i className="bx bx-comment"></i>
                                                    No comments
                                                </a>
                                            </li>

                                            <li className="float">
                                                <i className="bx bx-calendar-alt"></i>
                                                September 20, 2020
                                            </li>
                                        </ul>
                                        
                                        <h3>The essentials of cybersecurity solutions</h3>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>

                                        <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                    </div>

                                    <blockquote>
                                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore dolore magna aliqua.”</p>
                                        <i className="bx bxs-quote-alt-left"></i>
                                    </blockquote>

                                    <div className="news-content-2">
                                        <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi nulla quis nibh. Quisque a lectus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. malesuada erat ut turpis. Suspendisse urna nibh, viverra non semper suscipit ultrices nulla quis nibh.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-post-img">
                                                <img src="/images/blog-details/blog-1.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-post-img">
                                                <img src="/images/blog-details/blog-2.jpg" alt="Image" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="news-content-3">
                                        <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi nulla quis nibh. Quisque a lectus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. malesuada erat ut turpis. Suspendisse urna nibh, viverra non semper suscipit ultrices nulla quis nibh.</p>
                                    </div>

                                    <div className="tag-list">
                                        <span>Tags:</span>

                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">
                                                    Cybersecurity
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    Seaacurity
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    Hackers
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    Cybercrime
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Comments />
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

export default BlogDetails;