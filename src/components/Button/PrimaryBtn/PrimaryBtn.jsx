import React from 'react';
import './primaryBtn.css';

export const PrimaryBtn = (props) => {
  const className =
    typeof props.className !== 'undefined' ? props.className : 'primary';

  const typeBtn = typeof props.type !== 'undefined' ? props.type : 'button';

  const onClick =
    typeof props.onClick !== 'undefined' ? props.onClick : () => {};

  return (
    <button
      className={`button ${className}`}
      onClick={() => onClick()}
      type={typeBtn}
    >
      {props.textBtn}
    </button>
  );
};
