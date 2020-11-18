import React, { useState } from 'react';
import { MenuItem } from '../MenuItem/MenuItem.jsx';
import './navbar.css';

export const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <button
        className={menuOpened ? 'hamburger hamburger--otevrene' : 'hamburger'}
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
        <ul className="menu__items">
          <MenuItem text="Proč Moninvo?" onSelect={handleSelectItem} />
          <MenuItem text="Ceník" onSelect={handleSelectItem} />
          <MenuItem text="Kontakty" onSelect={handleSelectItem} />
        </ul>
      ) : null}
    </>
  );
};
