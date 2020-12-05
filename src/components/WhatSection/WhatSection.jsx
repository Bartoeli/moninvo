import React from 'react';
import dashboard_scrn from '../../Images/HomePage/dashboard_scrn.png';

import video from '../../Images/Video/medium.mp4';
import './whatSection.css';

export const WhatSection = () => {
  return (
    <div className="whatSection">
      <h2>Jak Moninvo vypadá</h2>
      <video className="videoWhatSection" controls width="550px" height="auto">
        <source src={video} type="video/mp4"></source>
        Váš prohlížeč nepodporuje zobrazení videa.
      </video>
      <img
        className="dashboard-scrn"
        src={dashboard_scrn}
        alt="Snímek obrazovky Dashboardu"
      />
    </div>
  );
};
