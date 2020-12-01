import React, { useState } from 'react';
import { MenuIconDashside } from '../MenuItemDash/MenuIconDashside.jsx';
import { MenuItemDashside } from '../MenuItemDash/MenuItemDashside.jsx';
import Add_invoice from '../../../../Images/Icons/Add_invoice.svg';
import Edit from '../../../../Images/Icons/Edit.svg';
import Settings from '../../../../Images/Icons/Settings.svg';
import Dashboard_white from '../../../../Images/Icons/Dashboard_white.svg';
import './navBarDashside.css';

export const NavBarDashside = () => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  const handleSelectSideItem = () => {
    setSideMenuOpened(!sideMenuOpened);
  };

  return (
    <div className="menu_dashside">
      <div
        className="menu-icon_dashside"
        onClick={() => {
          setSideMenuOpened(!sideMenuOpened);
        }}
      >
        <MenuIconDashside
          iconSrc={Add_invoice}
          iconAlt="Ikona přidání faktury"
        />
        <MenuIconDashside iconSrc={Edit} iconAlt="Ikona tužky" />
        <MenuIconDashside iconSrc={Dashboard_white} iconAlt="Ikona grafu" />
        <MenuIconDashside
          iconSrc={Settings}
          iconAlt="Ikona ozubených koleček"
        />
      </div>
      {sideMenuOpened ? (
        <div className="menu-items-dashside">
          <div className="menu-item-invoice">
            <MenuItemDashside
              linkTo="uploadinvoice"
              onSelect={handleSelectSideItem}
              text="Nahrát fakturu (pdf)"
            />
            <MenuItemDashside
              linkTo="uploadinvoice"
              onSelect={handleSelectSideItem}
              text="Vložit data manuálně"
            />
          </div>
          <MenuItemDashside
            linkTo="dashboard"
            onSelect={handleSelectSideItem}
            text="Upravit data"
          />
          <MenuItemDashside
            linkTo="dashboard"
            onSelect={handleSelectSideItem}
            text="Dashboard"
          />
          <MenuItemDashside
            linkTo="dashboard"
            onSelect={handleSelectSideItem}
            text="Nastavení"
          />
        </div>
      ) : null}
    </div>
  );
};
