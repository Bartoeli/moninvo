import React from 'react';
import {NavBar} from "./NavBar.jsx"
import {Profile} from "./Profile.jsx"
import "./Header.css"

export const Header = () => {
  return(
  <header className="header">
    <div className = "logo">Logo</div>
    <NavBar/>
    <Profile/>
  </header>
  )
}
