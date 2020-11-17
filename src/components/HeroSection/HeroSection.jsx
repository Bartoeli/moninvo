import React from 'react';
import './style.css';
import { SectionText } from './SectionText/SectionText.jsx';
import { Button } from './Button/Button.jsx';

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <SectionText />
        <Button />
      </div>
    </>
  );
};
