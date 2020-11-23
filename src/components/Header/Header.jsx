import React from 'react';
import { NavBar } from './headerComponents/NavBar/NavBar.jsx';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="navbar">
        <NavBar />
      </div>
    </header>
  );
};
