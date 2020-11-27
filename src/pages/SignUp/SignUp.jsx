import React from 'react';
import { Link } from 'react-router-dom';

import { InputText } from '../../components/InputText/InputText.jsx';
import { InputCheck } from '../../components/InputCheck/InputCheck.jsx';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import './signup.css';

export const SignUp = () => {
  return (
    <>
      <div className="registrace">
        <h1>REGISTRACE</h1>
        <form action="">
          <InputText type="text" popis="Jméno" napoveda="Tomáš" />
          <InputText type="text" popis="Příjmení" napoveda="Čupr" />
          <InputText type="text" popis="Firma" napoveda="Rohlik.cz" />
          <InputText type="email" popis="E-mail" napoveda="tomas@rohlik.cz" />
          <InputText
            type="password"
            popis="Heslo"
            napoveda="Minimálně 8 znaků"
          />
          <InputText
            type="password"
            popis="Heslo znovu"
            napoveda="Stejné heslo pro kontrolu"
          />
          <InputCheck text="Souhlasím s obchodními podmínkami" />
          <InputCheck text="Souhlasím se zprcováním osobních údajů" />
          <InputCheck text="Souhlasím s použitím kontaktu pro marketingové účely" />
          <PrimaryBtn
            className="primary"
            textBtn="Vyzkoušet"
            onClick={() => {}}
          />
        </form>
        Pokud již registraci máte, <Link to="/signin">přihlaste se</Link>
      </div>
    </>
  );
};
