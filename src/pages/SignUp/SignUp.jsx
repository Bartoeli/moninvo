import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { Footer } from '../../components/Footer/Footer.jsx';
import { dtb } from '../../utils/Firebase/dtb';
import { Header } from '../../components/Header/Header.jsx';
import { InputText } from '../../components/SignUpForm/InputText/InputText.jsx';
import { InputCheck } from '../../components/SignUpForm/InputCheck/InputCheck.jsx';
import { InputPassword } from '../../components/SignUpForm/InputPassword/InputPassword.jsx';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn/PrimaryBtn.jsx';
import './signup.css';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  const [advert, setAdvert] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const { push } = useHistory();

  const toastSuRef = useRef();

  const formCheck = () => {};

  return (
    <>
      <Toast ref={toastSuRef} />
      <Header />
      <div className="registrace">
        {/* <div className="bar">
          <Link to="/">
            <img className="regLogo" src={image} alt="Logo Moninvo" />
          </Link>
          <div className="domuBtn">
            <Link to="/">DOMŮ</Link>
          </div>
        </div> */}
        <h1 className="h1reg">REGISTRACE</h1>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            username === '' ||
            email === '' ||
            password === '' ||
            !gdpr ||
            !terms
              ? toastSuRef.current.show({
                  severity: 'error',
                  summary: 'Vyplňte všechna pole',
                  detail:
                    'Pro úspěšné dokončení registrace je nutné vyplnit všechna pole a udělit souhlas s obchodními podmínkami a GDPR.',
                  life: 7000,
                })
              : password !== confirmPassword
              ? toastSuRef.current.show({
                  severity: 'error',
                  summary: 'Vaše hesla se neshodují',
                  detail:
                    'Heslo zadané do pole "Heslo znovu" se neshoduje se zadaným heslem v poli výše.',
                  life: 7000,
                })
              : dtb
                  .collection('users')
                  .add({
                    username: username,
                    email: email,
                    password: password,
                    terms: terms,
                    gdpr: gdpr,
                    advert: advert,
                  })
                  .then(() => {
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setTerms('');
                    setGdpr('');
                    setAdvert('');
                    toastSuRef.current.show({
                      severity: 'success',
                      summary: 'Registrace proběhla úspěšně!',
                      detail:
                        'Email s žádostí o potvrzení Vaší emailové adresy byl odeslán.',
                      life: 7000,
                    });
                  });
          }}
        >
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
          <InputPassword
            value={password}
            setChanged={setPassword}
            label="Heslo"
          />
          <InputPassword
            value={confirmPassword}
            setChanged={setConfirmPassword}
            label="Heslo znovu"
          />
          <InputCheck
            text="Souhlasím s obchodními podmínkami"
            checked={terms}
            setChecked={setTerms}
          />
          <InputCheck
            text="Souhlasím se zpracováním osobních údajů"
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
              type="submit"
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
      <Footer />
    </>
  );
};
