import React from 'react';
import dashboard_scrn from '../../Images/HomePage/dashboard_scrn.png';
import './whatSection.css';

export const WhatSection = () => {
  return (
    <div className="whatSection">
      <img
        className="dashboard-scrn"
        src={dashboard_scrn}
        alt="Snímek obrazovky Dashboardu"
      />
      <div className="whatSection-descrp">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          temporibus delectus ea fugiat facilis quas recusandae corrupti. Minima
          rerum vel doloribus velit sint, quibusdam dolorum quae cum veniam
          consequatur reiciendis? Velit, quam. In totam labore ipsam provident a
          enim, aperiam unde reprehenderit illo nulla neque!
        </p>{' '}
        <p>
          Tempore, iusto sequi quae quaerat quasi sint ducimus dolorum tenetur,
          corrupti odio molestiae error itaque? Quasi sapiente minus maxime
          reprehenderit perspiciatis consequuntur, eaque deleniti, tempora,
          eveniet harum molestias vero. Corrupti blanditiis cupiditate officiis,
          fugiat dicta doloribus rerum, eligendi accusamus non, iure maiores
          adipisci? Esse, deleniti.
        </p>
      </div>
    </div>
  );
};
