import React from 'react';

import { NavBarDash } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDash';
import { NavBarDashside } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDashside';
import { Footer } from '../../components/Footer/Footer.jsx';
import { HeaderDash } from '../../components/HeaderDash/HeaderDash';
import underConstruction from '../../Images/Icons/underConstruction.svg';
import './edit.css';

export const Edit = () => {
  return (
    <>
      <div className="editDiv">
        <HeaderDash />
        <NavBarDashside />

        <NavBarDash />

        <div className="profileDiv">
          <h1 className="profileH1">
            Zde brzy naleznete možnost upravit si své kategorie a štítky.
          </h1>
          <img
            className="ConstructionIcon"
            src={underConstruction}
            alt="Ikona stavby"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
