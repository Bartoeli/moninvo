import React from 'react';

import { HeaderDash } from '../../components/HeaderDash/HeaderDash';
import underConstruction from '../../Images/Icons/underConstruction.svg';
import './edit.css';
import { NavBarDashside } from '../../components/HeaderDash/headerComponentsDash/NavBarDash/NavBarDashside';

export const Edit = () => {
  return (
    <>
      <HeaderDash />
      <NavBarDashside />
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
    </>
  );
};