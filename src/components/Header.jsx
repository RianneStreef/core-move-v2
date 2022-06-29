import React from "react";
import { Link } from "gatsby";

import Navbar from "../components/Nav/Navbar";

import logo from "../images/logo.png";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-link" to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
