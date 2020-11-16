import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { HeroSection } from '../../components/HeroSection/HeroSection.jsx';
import { WhySection } from '../../components/WhySection/WhySection.jsx';

export const LandingPage = ()=>{
  return (
  <>
    <Header />
    <HeroSection />
    <WhySection />
  </>
  )
}
