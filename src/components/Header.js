import React from 'react'
import logo from '../assets/logo.png';
import login from '../assets/icon-login.png';

const Header = () => {
  return (
    <div className="section1">
      <div className="section1_logo">
        <img src={logo} alt="logo App"/>
      </div>
      <div className="section1_login">
        <div className="login_border">Login <img src={login} alt="logo App"/></div>
        <div className="trial">Star your free trial</div>
      </div>
    </div>
  )
}

export default Header