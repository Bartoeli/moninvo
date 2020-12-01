import React, { useState } from 'react';
import { MenuItemDash } from '../MenuItemDash/MenuItemDash.jsx';
import { Add_invoice } from '../../../../Images/Icons/Add_invoice.svg';
import { Edit } from '../../../../Images/Icons/Edit.svg';
import { Settings } from '../../../../Images/Icons/Settings.svg';
import { Dashboard_white } from '../../../../Images/Icons/Dashboard_white.svg';
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
            dashMenuOpened
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
        {dashMenuOpened ? (
          <ul className="menu-items_dash ">
            <MenuItemDash
              iconSrc={Add_invoice}
              iconAlt="Ikona přidání faktury"
              id="AddInvoice"
              text="Přidat fakturu"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={Edit}
              iconAlt="Ikona tužky"
              id="Edit"
              text="Upravit data"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={Settings}
              iconAlt="Ikona ozubených koleček"
              id="Settings"
              text="Nastavení"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={Dashboard_white}
              iconAlt="Ikona grafu"
              id="Dashboard"
              text="Dashboard"
              onSelect={handleSelectDashItem}
            />
          </ul>
        ) : null}
      </nav>

      <nav className="navDash_desktop">
        <ul className="menu-items_dash">
          <MenuItemDash
            iconSrc={Add_invoice}
            iconAlt="Ikona přidání faktury"
            id="AddInvoice"
            text="Přidat fakturu"
            onSelect={handleSelectDashItem}
          />
          <MenuItemDash
            iconSrc={Edit}
            iconAlt="Ikona tužky"
            id="Edit"
            text="Upravit data"
            onSelect={handleSelectDashItem}
          />
          <MenuItemDash
            iconSrc={Settings}
            iconAlt="Ikona ozubených koleček"
            id="Settings"
            text="Nastavení"
            onSelect={handleSelectDashItem}
          />
          <MenuItemDash
            iconSrc={Dashboard_white}
            iconAlt="Ikona grafu"
            id="Dashboard"
            text="Dashboard"
            onSelect={handleSelectDashItem}
          />
        </ul>
      </nav>
    </>
  );
};
