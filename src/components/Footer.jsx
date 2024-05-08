import React from "react";
import {Link } from "react-router-dom";
import '../index.css'
import LogoNavbar from "./LogoNavbar";

function Footer() {

  return (
    <footer id="myfooter">
      <div className='site-footer-logo'>
        <img src={'/mylogo.svg'} className="site-footer-logo" alt="Hannah Warren's Logo" />
      </div>
      <div className='site-footer-nav'>
        <h3>Pages</h3>
        <div className='site-footer-nav-links'>
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='site-footer-socials'>
        <h3>Socials</h3>
        <div className='site-footer-socials-links'>
        <Link to="http://instagram.com/h_warren03">Instagram</Link>
        <Link to="http://linkedin.com/in/hannah-warren-314479214">LinkedIn</Link>
        <Link to="http://www.behance.net/hannahwarren6">Behance</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
