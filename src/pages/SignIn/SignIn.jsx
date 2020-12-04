import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Toast } from 'primereact/toast';

import { InputText } from '../../components/SignUpForm/InputText/InputText.jsx';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import image from '../../Images/Logo/svg/moninvo_logo_WHT.svg';
import './signin.css';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [passOne, setPassOne] = useState('');
  const { push } = useHistory();
  const toastSiRef = useRef();

  return (
    <>
      <Toast ref={toastSiRef} />

      <div className="prihlaseni">
        <div className="pbar">
          <Link to="/">
            <img className="logLogo" src={image} alt="Logo Moninvo" />
          </Link>
          <div className="pdomuBtn">
            <Link to="/">DOMŮ</Link>
          </div>
        </div>
        <h1 className="h1log">PŘIHLÁŠENÍ</h1>
        <form action="" className="form">
          <InputText
            type="text"
            value={username}
            label="Uživatelské jméno"
            placeholder="Rohlik.cz"
            setChanged={setUsername}
          />

          <InputText
            type="password"
            value={passOne}
            label="Heslo"
            placeholder="Minimálně 8 znaků"
            setChanged={setPassOne}
          />

          <div className="logBtn">
            <PrimaryBtn
              className="primary"
              textBtn="Přihlásit se"
              onClick={() => {
                username !== '' && passOne !== ''
                  ? push('/dashboard')
                  : toastSiRef.current.show({
                      severity: 'error',
                      summary: 'Přihlášení se nezdařilo',
                      life: 5000,
                    });
              }}
            />
          </div>
        </form>
        <div className="pregBtn">
          <PrimaryBtn
            className="secondary"
            textBtn="Registrovat se"
            onClick={() => push('/signup')}
          />
        </div>
      </div>
    </>
  );
};
