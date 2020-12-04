import React from 'react';
import './inputtext.css';

export const InputText = (props) => {
  return (
    <>
      <label className="label">
        {props.label}
        <input
          className="textField"
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.setChanged(e.target.value)}
        />
      </label>
    </>
  );
};
