import React from 'react';
import './headerLogo.css';
import moninvo_mark_WHT from '../../../../Images/Logo/png/moninvo_mark_WHT.png';
import moninvo_logo_BLU from '../../../../Images/Logo/png/moninvo_logo_BLU.png';
import moninvo_logo_WHT from '../../../../Images/Logo/png/moninvo_logo_WHT.png';

export const HeaderLogo = () => {
  return (
    <span className="logoSpan">
      <img className="logo_s" src={moninvo_mark_WHT} alt="Moninvo logo" />
      <img className="logo_m" src={moninvo_logo_WHT} alt="Moninvo logo" />
      <img className="logo_l" src={moninvo_logo_BLU} alt="Moninvo logo" />
    </span>
  );
};
