import React from 'react';
import './style.css';
import { SectionText } from './SectionText/SectionText.jsx';
import { PrimaryBtn } from '../Button/PrimaryBtn/PrimaryBtn.jsx';
import { HeroPicture } from './HeroPicture/HeroPicture.jsx';
import { SecondaryText } from './SecondaryText/SecondaryText.jsx';
import image from '../../Images/HomePage/hero-01.svg';

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <HeroPicture />
        <div className="left">
          <SectionText />
          <SecondaryText />
          <PrimaryBtn
            className="primary"
            textBtn="Vyzkoušet"
            onClick={() => {}}
          />
        </div>
        <div className="right">
          <div className="blobik"></div>
          <img className="ilustrace" src={image} alt="invoice ilustrace" />
        </div>
      </div>
    </>
  );
};
