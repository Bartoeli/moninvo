import React from 'react';

export const MenuIconDashside = (props) => {
  return (
    <>
      <img
        className="menu-icon_dashside"
        src={props.iconSrc}
        alt={props.iconAlt}
      />
    </>
  );
};
