import React from 'react';
import { Link } from 'react-router-dom';
import './menuItemDashside.css';

export const MenuItemDashside = (props) => {
  return (
    <>
      <Link
        to={`/${props.linkTo}`}
        className="menu-link_dashside"
        onClick={() => props.onSelect()}
      >
        {props.text}
      </Link>
    </>
  );
};
