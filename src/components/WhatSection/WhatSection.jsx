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
      </div>
  );
};
