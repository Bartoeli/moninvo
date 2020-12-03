import React from 'react';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash';
import underConstruction from '../../Images/Icons/underConstruction.svg';
import './settings.css';

export const Settings = () => {
  return (
    <>
      <HeaderDash />
      <div className="profileDiv">
        <h1 className="profileH1">
          Zde brzy naleznete možnost upravit si svůj dashboard.
        </h1>
        <img
          className="ConstructionIcon"
          src={underConstruction}
          alt="Ikona stavby"
        />
      </div>
    </>
  );
};
