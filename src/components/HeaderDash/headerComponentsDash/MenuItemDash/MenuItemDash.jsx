import React from 'react';
import './menuItemDash.css';

export const MenuItemDash = (props) => {
  return (
    <>
      <li className="menu-item_dash">
        <img
          className="menu-icon_dash"
          src={props.iconSrc}
          alt={props.iconAlt}
        />
        <a
          href={`#`}
          className="menu-url_dash"
          onClick={() => props.onSelect()}
        >
          {props.text}
        </a>
      </li>
    </>
  );
};
