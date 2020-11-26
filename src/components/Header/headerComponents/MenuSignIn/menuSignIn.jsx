import React, { useState } from 'react';
import { PrimaryBtn } from '../../../Button/PrimaryBtn/PrimaryBtn';
import './menuSignIn.css';

export const MenuSignIn = () => {
  return (
    <div className="signIn">
      <a className="menu-item menu-signInMobil" href="#">
        Přihlásit
      </a>
      <a className="menu-item menu-signInMobil" href="#">
        Registrovat
      </a>
      <a className="menu-signInDesktop menu-item" href="#">
        Přihlásit
      </a>
      <PrimaryBtn
        className="menu-signInDesktop secondary"
        textBtn="Registrovat"
      />
    </div>
  );
};
