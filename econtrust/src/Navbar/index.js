import React, { useState } from 'react';
import './index.css';
import logo2 from '../Images/logo2.png'


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection=(id)=>{
    const element =document.getElementById(id);
    if(element){
      element.scrollIntoView({
        behaviour:'smooth',
        block:'start',
      });
    }
  };

  return (
    <div className='container'>
      <div className="navbar">
        <div className="nav">
        <img  src={logo2} alt="logo" id="logo" />
          <p id='logobrand'><b>EconTrust</b></p>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={()=> scrollToSection('home')}>Home</a></li>
          <li><a href="# about" onClick={()=> scrollToSection('about')}>About Us</a></li>
          <li><a href="# services" onClick={()=> scrollToSection('services')}>Services</a></li>
          <li><a href="# team" onClick={()=> scrollToSection('team')}>Team</a></li>
          <li><a href="# contact" onClick={()=> scrollToSection('Contact')}>Contact Us</a></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;