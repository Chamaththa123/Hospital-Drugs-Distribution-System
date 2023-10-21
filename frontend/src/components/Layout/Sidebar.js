import React from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.png';

function Sidebar() {
  return (
    <div>
      <div className="sidenav">
        <div>
         <center> <img src={logo} className='logo' alt='cd'/></center>
        </div>
        <a href="#about">DashBoard</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Sidebar;
