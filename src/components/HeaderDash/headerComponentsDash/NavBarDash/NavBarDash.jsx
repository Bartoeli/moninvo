import React, { useState } from 'react';
import { MenuItemDash } from '../MenuItemDash/MenuItemDash.jsx';
import Add_invoice from '../../../../Images/Icons/Add_invoice.svg';
import Edit from '../../../../Images/Icons/Edit.svg';
import Settings from '../../../../Images/Icons/Settings.svg';
import Dashboard_white from '../../../../Images/Icons/Dashboard_white.svg';
import manualInvoice from '../../../../Images/Icons/manualInvoice.svg';

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
              linkTo="uploadinvoice"
              text="Přidat fakturu"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={manualInvoice}
              iconAlt="Ikona přidání faktury"
              linkTo="addinvoice"
              text="Vložit data manuálně"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={Edit}
              iconAlt="Ikona tužky"
              linkTo="edit"
              text="Upravit data"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={Settings}
              iconAlt="Ikona ozubených koleček"
              linkTo="settings"
              text="Nastavení"
              onSelect={handleSelectDashItem}
            />
            <MenuItemDash
              iconSrc={Dashboard_white}
              iconAlt="Ikona grafu"
              linkTo="dashboard"
              text="Dashboard"
              onSelect={handleSelectDashItem}
            />
          </ul>
        ) : null}
      </nav>
    </>
  );
};
