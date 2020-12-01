import React, { useState } from 'react';
import { MenuItem_dash } from '../MenuItemDash/MenuItemDash.jsx';
import './navBarDash.css';

export const NavBarDash = () => {
  const [dashMenuOpened, setDashMenuOpened] = useState(false);

  const handleSelectDashItem = () => {
    setDashMenuOpened(!dashMenuOpened);
  };

  return (
    <>
      <nav className="navDash_mobil">
        <button
          className={
            menuOpened
              ? 'hamburger_dash hamburger--opened_dash '
              : 'hamburger_dash '
          }
          aria-label="menu"
          onClick={() => {
            setDashMenuOpened(!dashMenuOpened);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpened ? (
          <ul className="menu-items_dash ">
            <MenuItem_dash
              id="AddInvoice"
              text="Přidat fakturu"
              onSelect={handleSelectDashItem}
            />
            <MenuItem_dash
              id="Edit"
              text="Upravit data"
              onSelect={handleSelectDashItem}
            />
            <MenuItem_dash
              id="Settings"
              text="Nastavení"
              onSelect={handleSelectDashItem}
            />
            <MenuItem_dash
              id="Dashboard"
              text="Dashboard"
              onSelect={handleSelectDashItem}
            />
          </ul>
        ) : null}
      </nav>

      <nav className="navDash_desktop">
        <ul className="menu-items_dash">
          <MenuItem_dash
            id="AddInvoice"
            text="Přidat fakturu"
            onSelect={handleSelectDashItem}
          />
          <MenuItem_dash
            id="Edit"
            text="Upravit data"
            onSelect={handleSelectDashItem}
          />
          <MenuItem_dash
            id="Settings"
            text="Nastavení"
            onSelect={handleSelectDashItem}
          />
          <MenuItem_dash
            id="Dashboard"
            text="Dashboard"
            onSelect={handleSelectDashItem}
          />
        </ul>
      </nav>
    </>
  );
};
