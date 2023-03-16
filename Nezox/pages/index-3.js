import React from 'react';
import NavbarThree from '../components/_App/NavbarThree';
import MainBanner from '../components/HomeDemoThree/MainBanner';
import Features from '../components/HomeDemoThree/Features';
import OurApproach from '../components/HomeDemoThree/OurApproach';
import Solution from '../components/HomeDemoThree/Solution';
import CyberSafety from '../components/HomeDemoThree/CyberSafety';
import PriceTableTwo from '../components/Common/PriceTableTwo';
import WhyChooseUs from '../components/HomeDemoThree/WhyChooseUs';
import TeamMemberTwo from '../components/Common/TeamMemberTwo';
import Protects from '../components/HomeDemoThree/Protects';
import FaqSection from '../components/HomeDemoThree/FaqSection';
import PartnersTwo from '../components/Common/PartnersTwo';
import LatestNews from '../components/Common/LatestNews';
import Footer from '../components/_App/Footer';

const Index3 = () => {
    return (
        <React.Fragment>
            <div className="bg-f5f7fa">
                <NavbarThree />
                <MainBanner />
                <Features />
                <OurApproach />
                <Solution />
                <CyberSafety />
                <PriceTableTwo />
                <WhyChooseUs />
                <TeamMemberTwo />
                <Protects />
                <FaqSection />
        
                <div className="bg-white">
                    <LatestNews />
                </div>

                <PartnersTwo />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Index3;