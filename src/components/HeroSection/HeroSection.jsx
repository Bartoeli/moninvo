import React from 'react';
import './style.css';
import { SectionText } from './SectionText/SectionText.jsx';
import { PrimaryBtn } from '../Buttons/PrimaryBtn/PrimaryBtn.jsx';

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <SectionText />
        <PrimaryBtn className="primary" textBtn="Vyzkoušet" />
      </div>
    </>
  );
};
