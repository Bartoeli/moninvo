import React from 'react';
import { NavBar } from './headerComponents/NavBar/NavBar.jsx';
import './header.css';
import { HeaderLogo } from './headerComponents/HeaderLogo/HeaderLogo.jsx';

export const Header = () => {
  return (
    <header className="header">
        <HeaderLogo/>
        <NavBar />
    </header>
  );
};
