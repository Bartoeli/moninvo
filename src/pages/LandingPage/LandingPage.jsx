import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { HeroSection } from '../../components/HeroSection/HeroSection.jsx';
import { WhySection } from '../../components/WhySection/WhySection.jsx';
import './LandingPage.css';

export const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <Header />
        <HeroSection />
        <WhySection />
      </div>
    </>
  );
};
