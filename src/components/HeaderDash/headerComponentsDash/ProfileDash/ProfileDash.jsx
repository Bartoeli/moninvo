import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../../../Images/Icons/User.svg';
import './profileDash.css';

export const ProfileDash = () => {
  return (
    <div className="profile_dash">
      <img className="profile-icon_dash" src={User} alt="Ikona uživatele" />
      <Link to="/profile" className="profile-link_dash">
        Profil
      </Link>
    </div>
  );
};
