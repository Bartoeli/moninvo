import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../../../../Images/Icons/User.svg';
import './profileDash.css';

export const ProfileDash = () => {
  const [profileOpened, setProfileOpened] = useState(false);

  const handleSelectProfileItem = () => {
    setProfileOpened(!profileOpened);
  };

  return (
    <div
      className={
        profileOpened ? 'profile_dash profile_dash--opened' : 'profile_dash'
      }
      onClick={() => {
        setProfileOpened(!profileOpened);
      }}
    >
      <img className="profile-icon_dash" src={User} alt="Ikona uživatele" />
      {profileOpened ? (
        <>
          <Link to="/profile" className="profile-link_dash">
            Úprava profilu
          </Link>
          <Link to="/" className="profile-link_dash">
            Odhlásit se
          </Link>
        </>
      ) : null}
    </div>
  );
};
