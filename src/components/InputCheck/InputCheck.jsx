import React from 'react';
import './inputcheck.css';

export const InputCheck = (props) => {
  return (
    <>
      <label className="label labelCheck">
        <input
          className="checkbox"
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.setChecked(e.target.checked)}
        />
        {props.text}
      </label>
    </>
  );
};
