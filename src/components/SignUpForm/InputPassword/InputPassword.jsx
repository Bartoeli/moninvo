import React from 'react';
import './InputPassword.css';

export const InputPassword = (props) => {
  const password1 = (
    <>
      <label className="label">
        Heslo
        <input
          className="passwordReg textField"
          type="password"
          minLength="8"
          value={props.value}
          placeholder="MojeHeslo456"
          title="Heslo musí obsahovat minimálně 8 znaků, 1 číslici, 1 velké a 1 malé písmeno."
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={(e) => props.setChanged(e.target.value)}
          autoComplete="current-password"
        />
      </label>
    </>
  );

  const password2 = (
    <>
      <label className="label">
        Heslo znovu
        <input
          className="passwordReg textField"
          type="password"
          minLength="8"
          value={props.value}
          placeholder="MojeHeslo456"
          title="Heslo musí obsahovat minimálně 8 znaků, 1 číslici, 1 velké a 1 malé písmeno."
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={(e) => props.setChanged(e.target.value)}
          autoComplete="current-password"
          onKeyUp={() => {
            password1.value === password2.value
              ? console.log('hesla se shodují')
              : console.log('hesla se neshodují');
          }}
        />
      </label>
    </>
  );

  return (
    <>
      {password1}
      {password2}
    </>
  );
};
