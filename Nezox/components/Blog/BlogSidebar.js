import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-sidebar">
            <div className="sidebar-widget search">
                <form className="search-form">
                    <input className="form-control" name="search" placeholder="Search here" type="text" />
                    <button className="search-button" type="submit">
                        <i className="bx bx-search"></i>
                    </button>
                </form>	
            </div>

            <div className="sidebar-widget recent-post">
                <h3 className="widget-title">Recent Post</h3>
                
                <ul>
                    <li>
                        <Link href="/blog-details">
                            <a>
                                The essentiaaals of cybersecurity solutions
                                <img src="/images/blog-details/recent-post-1.jpg" alt="Image" />
                            </a>
                        </Link>
                        <span>September 19,2020</span>
                    </li>
                    <li>
                        <Link href="/blog-details">
                            <a>
                                Top 10 cybersecurity tips for working place
                                <img src="/images/blog-details/recent-post-2.jpg" alt="Image" />
                            </a>
                        </Link>
                        <span>September 18,2020</span>
                    </li>
                    <li>
                        <Link href="/blog-details">
                            <a>
                                Don’t forget caybersecurity on your computer
                                <img src="/images/blog-details/recent-post-3.jpg" alt="Image" />
                            </a>
                        </Link>
                        <span>September 09,2020</span>
                    </li>
                </ul>
            </div>

            <div className="sidebar-widget categories">
                <h3>Categories</h3>

                <ul>
                    <li>
                        <a href="/blog-1">Cyber Security</a>
                    </li>
                    <li>
                        <a href="/blog-1">Network Security</a>
                    </li>
                    <li>
                        <a href="/blog-1">Threat Hunter</a>
                    </li>
                    <li>
                        <a href="/blog-1">Incident Responder</a>
                    </li>
                    <li>
                        <a href="/blog-1">Secure Managed IT</a>
                    </li>
                    <li>
                        <a href="/blog-1">Server Monitoring</a>
                    </li>
                    <li>
                        <a href="/blog-1">Penetration Testing</a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-widget categories">
                <h3>Archives</h3>

                <ul>
                    <li>
                        <a href="#">August 2020</a>
                    </li>
                    <li>
                        <a href="#">June 2020</a>
                    </li>
                    <li>
                        <a href="#">April 2020</a>
                    </li>
                    <li>
                        <a href="#">January 2020</a>
                    </li>
                    <li>
                        <a href="#">December 2019</a>
                    </li>
                    <li>
                        <a href="#">November 2019</a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-widget tags mb-0">
                <h3>Tags</h3>

                <ul>
                    <li>
                        <a href="/blog-1">Cyber</a>
                    </li>
                    <li>
                        <a href="/blog-1">Security</a>
                    </li>
                    <li>
                        <a href="/blog-1">Network</a>
                    </li>
                    <li>
                        <a href="/blog-1">Responder</a>
                    </li>
                    <li>
                        <a href="/blog-1">Secure</a>
                    </li>
                    <li>
                        <a href="/blog-1">Monitoring</a>
                    </li>
                    <li>
                        <a href="/blog-1">Penetration</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar;