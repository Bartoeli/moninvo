import React from 'react';

export const MenuItem = (props) => {
  return (
    <li>
    <a href="#" className="menu-item" onClick={() => props.onSelect()}>
      {props.text}
    </a>
    </li>
  );
};
