import React from 'react';
import { NavBar } from './headerComponents/NavBar/NavBar.jsx';
import './header.css';
import { HeaderLogo } from './headerComponents/HeaderLogo/HeaderLogo.jsx';

export const Header = (props) => {
  return (
    <header className="header">
      <HeaderLogo />
      <NavBar showLPLinks={props.showLPLinks} />
    </header>
  );
};
