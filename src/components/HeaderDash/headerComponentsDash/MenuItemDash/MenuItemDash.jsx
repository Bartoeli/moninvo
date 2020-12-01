import React from 'react';
import './menuItemDash.css';

export const MenuItemDash = () => {
  return (
    <>
      <li className="menu-item_dash">
        <a
          href={`#${props.id}`}
          className="menu-url_dash"
          onClick={() => props.onSelect()}
        >
          {props.text}
        </a>
      </li>
    </>
  );
};
