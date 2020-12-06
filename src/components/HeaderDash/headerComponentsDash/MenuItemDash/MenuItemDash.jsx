import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          to={`/${props.linkTo}`}
          className="menu-url_dash"
          onClick={() => props.onSelect()}
        >
          {props.text}
        </Link>
      </li>
    </>
  );
};
