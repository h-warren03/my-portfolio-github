import React from "react";
import {Link } from "react-router-dom";
import '../index.css'
import LogoNavbar from "./LogoNavbar";

function Navbar() {
  const styles = {fill: '#fff'};
  return (
    <nav>
      <div className="logo-nav">
        <Link to="/">
        <LogoNavbar />
      </Link>
      </div>
      <div className="navItems">
        <ul>
          <li>
          <Link to="/works">Works</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
