import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { HeroSection } from '../../components/HeroSection/HeroSection.jsx';
import { WhySection } from '../../components/WhySection/WhySection.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Pricing } from '../../components/Pricing/Pricing.jsx';
import { WhatSection } from '../../components/WhatSection/WhatSection.jsx';

import './LandingPage.css';

export const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <Header />
        <HeroSection />
        <WhySection />
        <WhatSection />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};
