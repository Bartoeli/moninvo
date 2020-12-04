import React from 'react';
import moninvo_logo_WHT from '../../Images/Logo/png/moninvo_logo_WHT.png';
import { Link } from 'react-router-dom';

import { NavBarDash } from './headerComponentsDash/NavBarDash/NavBarDash.jsx';
import { ProfileDash } from './headerComponentsDash/ProfileDash/ProfileDash.jsx';

import './headerDash.css';

export const HeaderDash = () => {
  return (
    <header className="headerDashboard">
      <Link to="/dashboard">
        <img
          className="logo_wht_dash"
          src={moninvo_logo_WHT}
          alt="Moninvo logo"
        />
      </Link>
      <NavBarDash />
      <ProfileDash />
    </header>
  );
};
