import React from "react";
import logo from '../assets/universal-logo-new.webp';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 px-4">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
        {/* Logo */}
        <img src={logo} alt="College Vidya Logo" style={{ height: 48 }} className="me-3" />
      </div>
      <div className="d-flex align-items-center">
        <span className="me-3 text-dark">Sarthak | Male | 28 Yrs</span>
        <button className="btn fw-semibold text-light px-3" style={{backgroundColor:"#1ABC9C"}}>Important Facts</button>
      </div>
    </div>
  </nav>
);

export default Header;
