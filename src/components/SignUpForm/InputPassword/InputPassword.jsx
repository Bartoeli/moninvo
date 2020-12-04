import React from 'react';
import './InputPassword.css';

export const InputPassword = (props) => {
  return (
    <>
      <label className="label">
        {props.label}
        <input
          className="passwordReg textField"
          type="password"
          minLength="8"
          value={props.value}
          placeholder="MojeHeslo456"
          title="Heslo musí obsahovat minimálně 8 znaků, 1 číslici, 1 velké a 1 malé písmeno."
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={(e) => props.setChanged(e.target.value)}
          autoComplete="new-password"
        />
      </label>
    </>
  );
};
