import React, { useState } from 'react';
import './profile.css';

export const Profile = () => {
  const [profileOpened, setProfileOpened] = useState(false);
  return (
    <>
      <button
        className={
          profileOpened ? 'profile profile--opened' : 'profile'
        }
        onClick={() => {
          setProfileOpened(!profileOpened);
        }}
      ></button>
      {profileOpened ? <div className="profileItems">
        <button className="profileBtn">Přihlásit</button>
        <button className="profileBtn">Registrovat</button>
      </div> : null}
    </>
  );
};
