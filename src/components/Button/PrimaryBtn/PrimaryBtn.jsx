import React from 'react';
import './primaryBtn.css';

export const PrimaryBtn = (props) => {
  const className =
    typeof props.className !== 'undefined' ? props.className : 'primary';

  const typeBtn = typeof props.type !== 'undefined' ? props.type : 'button';

  return (
    <button
      className={`button ${className}`}
      onClick={() => props.onClick()}
      type={typeBtn}
    >
      {props.textBtn}
    </button>
  );
};
