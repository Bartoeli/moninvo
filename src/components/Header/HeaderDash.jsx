import React from 'react';
import moninvo_logo_WHT from '../../Images/Logo/png/moninvo_logo_WHT.png';
import './headerDash.css';

export const HeaderDash = () => {
  return (
    <header className="headerDashboard">
      <img className="logo_wht_dash" src={moninvo_logo_WHT} alt="Moninvo logo" />
    </header>
  );
};
