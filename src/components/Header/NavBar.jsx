import React, { useState } from 'react';
import { MenuItem } from './MenuItem.jsx';

export const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleSelectItem = () => {
    setMenuOpened(false);
  };

  return (
    <nav className={menuOpened ? 'menu' : 'menu--closed'}>
      <button
        className="menu__btn"
        onClick={() => setMenuOpened(true)}
      ></button>
      <div className="menu__items">
        <MenuItem text="Why section" onSelect={handleSelectItem} />
        <MenuItem text="Ceník" onSelect={handleSelectItem} />
        <MenuItem text="Kontakty" onSelect={handleSelectItem} />
      </div>
    </nav>
  );
};
