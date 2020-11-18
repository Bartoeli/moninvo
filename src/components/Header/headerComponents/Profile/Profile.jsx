import React, { useState } from 'react';
import './profile.css';
import { PrimaryBtn } from '../../../Buttons/PrimaryBtn/PrimaryBtn.jsx';
import { SecondaryBtn } from '../../../Buttons/SecondaryBtn/SecondaryBtn.jsx';

export const Profile = () => {
  const [profileOpened, setProfileOpened] = useState(false);
  return (
    <>
      <button
        className={profileOpened ? 'profile profile--opened' : 'profile'}
        onClick={() => {
          setProfileOpened(!profileOpened);
        }}
      ></button>
      {profileOpened ? (
        <div className="profileItems">
          <SecondaryBtn textBtn="Přihlásit" />
          <PrimaryBtn textBtn="Registrovat" />
        </div>
      ) : null}
    </>
  );
};
