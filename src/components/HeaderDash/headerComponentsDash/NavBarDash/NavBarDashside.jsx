import React, { useState } from 'react';
import { MenuIconDashside } from '../MenuItemDash/MenuIconDashside.jsx';
import { MenuItemDashside } from '../MenuItemDash/MenuItemDashside.jsx';
import Add_invoice from '../../../../Images/Icons/Add_invoice.svg';
import manualInvoice from '../../../../Images/Icons/manualInvoice.svg';
import Edit from '../../../../Images/Icons/Edit.svg';
import Settings from '../../../../Images/Icons/Settings.svg';
import Dashboard_white from '../../../../Images/Icons/Dashboard_white.svg';
import close2 from '../../../../Images/Icons/close2.svg';
import './navBarDashside.css';

export const NavBarDashside = () => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

  const handleSelectSideItem = () => {
    setSideMenuOpened(!sideMenuOpened);
  };

  return (
    <div className="menu_dashside">
      {!sideMenuOpened ? (
        <div
          className={
            !sideMenuOpened
              ? '.menu-icon_dashside'
              : '.menu-icon_dashside--closed'
          }
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
      ) : (
        <>
          <div
            className="menu-items-dashside--open"
            onClick={() => {
              handleSelectSideItem();
            }}
          >
            <div className="itemAndIcon">
              <MenuIconDashside
                iconSrc={Add_invoice}
                iconAlt="Ikona přidání faktury"
              />
              <MenuItemDashside
                linkTo="uploadinvoice"
                onSelect={handleSelectSideItem}
                text="Nahrát fakturu (pdf)"
              />
            </div>
            <div className="itemAndIcon">
              <MenuIconDashside
                iconSrc={manualInvoice}
                iconAlt="Ikona přidání faktury"
              />
              <MenuItemDashside
                linkTo="addinvoice"
                onSelect={handleSelectSideItem}
                text="Vložit data manuálně"
              />
            </div>
            <div className="itemAndIcon">
              <MenuIconDashside iconSrc={Edit} iconAlt="Ikona tužky" />
              <MenuItemDashside
                linkTo="dashboard"
                onSelect={handleSelectSideItem}
                text="Upravit data"
              />
            </div>
            <div className="itemAndIcon">
              <MenuIconDashside
                iconSrc={Dashboard_white}
                iconAlt="Ikona grafu"
              />
              <MenuItemDashside
                linkTo="dashboard"
                onSelect={handleSelectSideItem}
                text="Dashboard"
              />
            </div>
            <div className="itemAndIcon">
              <MenuIconDashside
                iconSrc={Settings}
                iconAlt="Ikona ozubených koleček"
              />
              <MenuItemDashside
                linkTo="dashboard"
                onSelect={handleSelectSideItem}
                text="Nastavení"
              />
            </div>
            <img src={close2} alt="Ikona křížku" className="closeMenuIcon" />
          </div>
        </>
      )}
    </div>
  );
};
