import React, { useState } from 'react';
import { MenuSignIn } from '../../headerComponents/MenuSignIn/menuSignIn.jsx';
import { MenuItem } from '../MenuItem/MenuItem.jsx';
import './navbar.css';

export const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <nav className="nav_mobil">
        <button
          className={menuOpened ? 'hamburger hamburger--opened' : 'hamburger'}
          aria-label="menu"
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpened ? (
          <ul className="menu-items">
            <MenuItem id="WhySection"text="Proč Moninvo?" onSelect={handleSelectItem} />
            <MenuItem id="Pricing" text="Ceník" onSelect={handleSelectItem} />
            <MenuItem id="Contacts" text="Kontakty" onSelect={handleSelectItem} />
            <MenuSignIn />
          </ul>
        ) : null}
      </nav>

      <nav className="nav_desktop">
        <ul className="menu-items">
          <MenuItem text="Proč Moninvo?" onSelect={handleSelectItem} />
          <MenuItem text="Ceník" onSelect={handleSelectItem} />
          <MenuItem text="Kontakty" onSelect={handleSelectItem} />
          <MenuSignIn />
        </ul>
      </nav>
    </>
  );
};
