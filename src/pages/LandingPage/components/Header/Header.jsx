import React from 'react';
import {NavBar} from "./NavBar.jsx"
import {Profile} from "./Profile.jsx"

export const Header = () => {
  return(
  <header>
    <div className = "logo">Logo</div>
    <NavBar/>
    <Profile/>
  </header>
  )
}
