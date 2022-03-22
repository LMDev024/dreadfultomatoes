import React from 'react'
import logo from '../assets/logo.png';
import logo_apple from '../assets/app store.png';
import logo_play_store from '../assets/google-play.png'
const Footer = () => {
  return (
    <div className="section4">
      <div className="section4_logo">
        <img src={logo} className="section4_logo" alt="logo main"></img>
      </div>
        <ul className="section4_nav">
          <li>Home</li>
          <li>Terms of User</li>
          <li>Legal Notices</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
      <div className="section4_icons">
        <img src={logo_apple} className="section4_logo" alt="apple logo"></img>
        <img src={logo_play_store} className="section4_logo" alt="app store logo"></img>
      </div>
      <div className="section4_copyright" >
          <span>Copyright 2020 Dreadful Tomato Streaming All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer