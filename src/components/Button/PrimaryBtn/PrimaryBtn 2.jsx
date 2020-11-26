import React from 'react';
import './primaryBtn.css';

export const PrimaryBtn = (props) => {
  const className =
    typeof props.className !== 'undefined' ? props.className : 'primary';

  return (
    <button className={`button ${className}`} onClick={() => props.onClick()}>
      {props.textBtn}
    </button>
  );
};
