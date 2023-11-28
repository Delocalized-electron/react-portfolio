import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contactImg.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <ReactLogo className="logo" /> */}
      <img src={logo} className="logo" alt="Logo"></img>
      <div className="desktop-menu">
        <Link className="desktop-menu-list-item">Home</Link>
        <Link className="desktop-menu-list-item">About</Link>
        <Link className="desktop-menu-list-item">Portfolio</Link>
      </div>
      <button className="desktop-menu-btn">
        <img
          src={contactImg}
          className="desktop-menu-img"
          alt="contact logo"
        ></img>
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
