import React from 'react';
import { Link } from 'react-router-dom';
import './headerLogo.css';
import moninvo_mark_WHT from '../../../../Images/Logo/png/moninvo_mark_WHT.png';
import moninvo_logo_BLU from '../../../../Images/Logo/png/moninvo_logo_BLU.png';
import moninvo_logo_WHT from '../../../../Images/Logo/png/moninvo_logo_WHT.png';

export const HeaderLogo = () => {
  return (
    <Link to="/" className="logoSpan">
      <img
        className="smallLogo_wht"
        src={moninvo_mark_WHT}
        alt="Moninvo logo"
      />
      <img className="bigLogo_wht" src={moninvo_logo_WHT} alt="Moninvo logo" />
      <img className="bigLogo_blu" src={moninvo_logo_BLU} alt="Moninvo logo" />
    </Link>
  );
};
