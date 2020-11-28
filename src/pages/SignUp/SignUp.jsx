import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { InputText } from '../../components/InputText/InputText.jsx';
import { InputCheck } from '../../components/InputCheck/InputCheck.jsx';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import image from '../../Images/Logo/svg/moninvo_logo_WHT.svg';
import './signup.css';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passOne, setPassOne] = useState('');
  const [passTwo, setPassTwo] = useState('');
  const [terms, setTerms] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  const [advert, setAdvert] = useState(true);
  const { push } = useHistory();

  return (
    <>
      <div className="registrace">
        <div className="bar">
          <Link to="/">
            <img className="regLogo" src={image} alt="Logo Moninvo" />
          </Link>
          <div className="domuBtn">
            <Link to="/">DOMŮ</Link>
          </div>
        </div>
        <h1 className="h1reg">REGISTRACE</h1>
        <form action="" className="form">
          <InputText
            type="text"
            value={username}
            popis="Uživatelské jméno"
            placeholder="Rohlik.cz"
            setChanged={setUsername}
          />
          <InputText
            type="email"
            value={email}
            popis="E-mail"
            placeholder="tomas@rohlik.cz"
            setChanged={setEmail}
          />
          <InputText
            type="password"
            value={passOne}
            popis="Heslo"
            placeholder="Minimálně 8 znaků"
            setChanged={setPassOne}
          />
          <InputText
            type="password"
            value={passTwo}
            popis="Heslo znovu"
            placeholder="Stejné heslo pro kontrolu"
            setChanged={setPassTwo}
          />
          <InputCheck
            text="Souhlasím s obchodními podmínkami"
            checked={terms}
            setChecked={setTerms}
          />
          <InputCheck
            text="Souhlasím se zprcováním osobních údajů"
            checked={gdpr}
            setChecked={setGdpr}
          />
          <InputCheck
            text="Souhlasím s použitím kontaktu pro marketingové účely"
            checked={advert}
            setChecked={setAdvert}
          />
          <div className="regBtn">
            <PrimaryBtn
              className="primary"
              textBtn="Registrovat"
              onClick={() => push('/dashboard')}
            />
          </div>
        </form>
        <div className="signBtn">
          <PrimaryBtn
            className="secondary"
            textBtn="Přihlásit se"
            onClick={() => push('/signin')}
          />
        </div>
      </div>
    </>
  );
};
