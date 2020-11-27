import React from 'react';

export const InputText = (props) => {
  return (
    <>
      <label>
        {props.popis}
        <input type={props.type} placeholder={props.napoveda} />
      </label>
    </>
  );
};
