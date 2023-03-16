import React from 'react';
import NavbarFive from '../components/_App/NavbarFive';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import PriceTable from '../components/Common/PriceTable';
import GetInTouchFormTwo from '../components/Common/GetInTouchFormTwo';

const Pricing = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
            /> 

            <PriceTable />

            <div className="divider"></div>

            <GetInTouchFormTwo />
 
            <Footer />
        </React.Fragment>
    )
}

export default Pricing;