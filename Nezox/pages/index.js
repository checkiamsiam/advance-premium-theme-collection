import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import Features from '../components/HomeDemoOne/Features';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import OurChallenges from '../components/Common/OurChallenges';
import Services from '../components/HomeDemoOne/Services';
import SolutionArea from '../components/HomeDemoOne/SolutionArea';
import GetInTouchForm from '../components/Common/GetInTouchForm';
import Protects from '../components/HomeDemoOne/Protects';
import Testimonials from '../components/Common/Testimonials';
import Partners from '../components/Common/Partners';
import LatestNews from '../components/Common/LatestNews';
import Footer from '../components/_App/Footer';
 
const Index = () => {
    return (
        <React.Fragment>
            <NavbarTwo />
            <MainBanner />
            <Features />

            <div className="pb-100">
                <AboutUsContent />
            </div>

            <OurChallenges />
            <Services />
            <SolutionArea />
            <GetInTouchForm />
            <Protects />
            <Testimonials />
            <Partners />
            <LatestNews />
            <Footer />
        </React.Fragment>
    )
}

export default Index;