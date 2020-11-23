import React, { useState } from 'react';
import { PrimaryBtn } from '../../../Buttons/PrimaryBtn/PrimaryBtn.jsx';
import { MenuItem } from '../MenuItem/MenuItem.jsx';
import './navbar.css';

export const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav>
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
          <MenuItem text="Proč Moninvo?" onSelect={handleSelectItem} />
          <MenuItem text="Ceník" onSelect={handleSelectItem} />
          <MenuItem text="Kontakty" onSelect={handleSelectItem} />
          <PrimaryBtn textBtn="Přihlásit / Registrovat" />
        </ul>
      ) : null}
    </nav>
  );
};
