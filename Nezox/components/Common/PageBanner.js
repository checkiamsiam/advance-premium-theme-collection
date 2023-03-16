import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area page-title-style-two">
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>

                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a><i className="bx bx-home"></i> {homePageText}</a>
                            </Link>
                        </li>
                        <li className="active">{activePageText}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;