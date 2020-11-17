import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Profile } from './Profile.jsx';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="navbar_profile">
        <NavBar />
        <Profile />
      </div>
    </header>
  );
};
