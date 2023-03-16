import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import MainBanner from '../components/HomeDemoFour/MainBanner';
import Features from '../components/HomeDemoFour/Features';
import OurApproach from '../components/HomeDemoFour/OurApproach';
import OurChallenges from '../components/Common/OurChallenges';
import Services from '../components/HomeDemoFour/Services';
import OurSolution from '../components/HomeDemoFour/OurSolution';
import GetInTouchForm from '../components/Common/GetInTouchForm';
import ProtectArea from '../components/HomeDemoFour/ProtectArea';
import Testimonials from '../components/Common/Testimonials';
import Partners from '../components/Common/Partners';
import LatestNewsTwo from '../components/Common/LatestNewsTwo';
import Footer from '../components/_App/Footer';

const Index4 = () => {
    return (
        <React.Fragment>
            <NavbarFour />
            <MainBanner />
            <Features />
            <OurApproach />
            <OurChallenges />
            <Services />
            <OurSolution />
            <GetInTouchForm />
            <ProtectArea />
            <Testimonials />
            <Partners />
            <LatestNewsTwo />
            <Footer />
        </React.Fragment>
    )
}

export default Index4;