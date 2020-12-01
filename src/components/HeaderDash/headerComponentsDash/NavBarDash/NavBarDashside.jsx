import React, { useState } from 'react';
import { MenuIconDashside } from '../MenuItemDash/MenuIconDashside.jsx';
import { MenuItemDashside } from '../MenuItemDash/MenuItemDashside.jsx';
import Add_invoice from '../../../../Images/Icons/Add_invoice.svg';
import Edit from '../../../../Images/Icons/Edit.svg';
import Settings from '../../../../Images/Icons/Settings.svg';
import Dashboard_white from '../../../../Images/Icons/Dashboard_white.svg';
import './navBarDashside.css';
import { Dashboard } from '../../../../pages/Dashboard/Dashboard.jsx';

export const NavBarDashside = () => {
  /* const [sideMenuOpened, setSideMenuOpened] = useState(false);

  const handleSelectSideItem = () => {
    setSideMenuOpened(!sideMenuOpened);
  }; */

  return (
    <div className="menu_dashside">
      <div className="menu-icon_dashside">
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
      <div className="menu-items-dashside">
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
    </div>
  );
};
