import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import MainBanner from '../components/HomeDemoFive/MainBanner';
import PartnersTwo from '../components/Common/PartnersTwo';
import Features from '../components/HomeDemoFive/Features';
import AboutUs from '../components/HomeDemoFive/AboutUs';
import OurChallenges from '../components/Common/OurChallenges';
import Services from '../components/HomeDemoFive/Services';
import PriceTable from '../components/Common/PriceTable';
import WhyChooseUs from '../components/HomeDemoFive/WhyChooseUs';
import TeamMember from '../components/Common/TeamMember';
import GetInTouchFormTwo from '../components/Common/GetInTouchFormTwo';
import LatestNewsTwo from '../components/Common/LatestNewsTwo';
import Footer from '../components/_App/Footer';

const Index5 = () => {
    return (
        <React.Fragment>
            <NavbarFour />
            <MainBanner />
            <PartnersTwo />
            <Features />
            <AboutUs />
            <OurChallenges />
            <Services />
            <PriceTable />
            <WhyChooseUs />
            <TeamMember />
            <GetInTouchFormTwo />

            <div className="pt-100">
                <LatestNewsTwo />
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default Index5;