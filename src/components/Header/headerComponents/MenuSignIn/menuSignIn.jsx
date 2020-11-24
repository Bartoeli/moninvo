import React, { useState } from 'react';
import { PrimaryBtn } from '../../../Buttons/PrimaryBtn/PrimaryBtn';
import './menuSignIn.css';

export const MenuSignIn = () => {
  return (
    <>
      <a className="menu-item menu-signInMobil" href="#">
        Přihlásit / Registrovat
      </a>
      <PrimaryBtn
        className="menu-signInDesktop primary"
        textBtn="Přihlásit / Registrovat"
      />
    </>
  );
};
