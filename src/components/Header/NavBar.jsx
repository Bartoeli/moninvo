import React, { useState } from 'react';
import { MenuItem } from './MenuItem.jsx';

export const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav>
      <button
        className={menu ? 'hamburger hamburger--otevrene' : 'hamburger'}
        aria-label="menu"
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {setMenuOpened ? (
        <ul className="menu__items">
          <MenuItem text="Why section" onSelect={handleSelectItem} />
          <MenuItem text="Ceník" onSelect={handleSelectItem} />
          <MenuItem text="Kontakty" onSelect={handleSelectItem} />
        </ul>
      ) : null}
    </nav>
  );
};
