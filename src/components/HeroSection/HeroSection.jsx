import React from 'react';
import './style.css';
import { SectionText } from './SectionText/SectionText.jsx';
import { PrimaryBtn } from '../Buttons/PrimaryBtn/PrimaryBtn.jsx';
import { HeroPicture } from './HeroPicture/HeroPicture.jsx';
import { SecondaryText } from './SecondaryText/SecondaryText.jsx';

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <HeroPicture />
        <SectionText />
        <SecondaryText />
        <PrimaryBtn className="primary" textBtn="Vyzkoušet" />
      </div>
    </>
  );
};
