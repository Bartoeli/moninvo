import React from 'react';
import { Link } from 'react-router-dom';

import './menuSignIn.css';

export const MenuSignIn = () => {
  return (
    <div className="signIn">
      <Link to="/signin" className="menu-item menu-signInMobil">
        Přihlásit
      </Link>
      <Link to="/signup" className="menu-item menu-signInMobil">
        Registrovat
      </Link>
      <Link to="/signin" className="menu-signInDesktop menu-item">
        Přihlásit
      </Link>
      <Link to="/signup" className="menu-signInDesktop menu-item">
        Registrovat
      </Link>
    </div>
  );
};
