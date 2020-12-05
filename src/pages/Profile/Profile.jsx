import React from 'react';

import { HeaderDash } from '../../components/HeaderDash/HeaderDash';
import underConstruction from '../../Images/Icons/underConstruction.svg';
import { NavBarDash } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDash.jsx';
import { NavBarDashside } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDashside.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import './profile.css';

export const Profile = () => {
  return (
    <>
      <HeaderDash />
      <NavBarDash />

      <NavBarDashside />
      <div className="profileDiv">
        <h1 className="profileH1">
          Zde brzy naleznete možnost upravit si svůj profil.
        </h1>
        <img
          className="ConstructionIcon"
          src={underConstruction}
          alt="Ikona stavby"
        />
      </div>
      <Footer />
    </>
  );
};
