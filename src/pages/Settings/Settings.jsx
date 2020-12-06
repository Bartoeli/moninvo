import React from 'react';

import { NavBarDash } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDash';
import { NavBarDashside } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDashside';
import { Footer } from '../../components/Footer/Footer.jsx';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash';
import underConstruction from '../../Images/Icons/underConstruction.svg';
import './settings.css';

export const Settings = () => {
  return (
    <><div className="settingsPage">
      <HeaderDash />

      <NavBarDash />

      <NavBarDashside />
      <div className="profileDiv">
        <h1 className="profileH1">
          Zde brzy naleznete možnost upravit si svůj dashboard.
        </h1>
        <img
          className="ConstructionIcon"
          src={underConstruction}
          alt="Ikona stavby"
        />
      </div></div>
      <Footer />
    </>
  );
};
