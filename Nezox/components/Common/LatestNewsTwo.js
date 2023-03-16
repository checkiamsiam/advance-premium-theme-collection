import React from 'react';
import Link from 'next/link';

const LatestNewsTwo = () => {
    return (
        <div className="blog-area blog-area-four pb-70">
			<div className="container">
				<div className="section-title">
					<span>Latest News</span>
					<h2>Read The Latest Articles From Us</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
							<div className="blog-img">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog/blog-1.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>

							<div className="blog-content">
								<span>September 20, 2020</span>
								<h3>
                                    <Link href="/blog-details">
                                        <a>The Security Risks of Changing Package Owners</a>
                                    </Link>
                                </h3>

								<Link href="/blog-details">
									<a className="read-more">
										Read More <i className="flaticon-right-arrow"></i>
									</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
							<div className="blog-img">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog/blog-2.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>

							<div className="blog-content">
								<span>September 19, 2020</span>
								<h3>
                                    <Link href="/blog-details">
                                        <a>Tips to Protecting Your Business and Family</a>
                                    </Link>
                                </h3>

								<Link href="/blog-details">
									<a className="read-more">
										Read More <i className="flaticon-right-arrow"></i>
									</a>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-blog">
							<div className="blog-img">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/images/blog/blog-3.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>

							<div className="blog-content">
								<span>September 18, 2020</span>
								<h3>
                                    <Link href="/blog-details">
                                        <a>Protect Your Workplace from Cyber Attacks</a>
                                    </Link>
                                </h3>

								<Link href="/blog-details">
									<a className="read-more">
										Read More <i className="flaticon-right-arrow"></i>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default LatestNewsTwo;