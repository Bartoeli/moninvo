import React from 'react';
import './inputtext.css';

export const InputText = (props) => {
  return (
    <>
      <label className="label">
        {props.popis}
        <input
          className="textField"
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => props.setChanged(e.target.value)}
        />
      </label>
    </>
  );
};
