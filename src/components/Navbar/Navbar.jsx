import React, { useState } from "react";
import "./Navbar.scss";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="assets/logo.png" alt="logo" className="logo" />
      </div>

      <div className="menu">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#whatisgpt">What is GPT?</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </div>

      <div className="auth">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="toggler">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={24}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={24}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>

      {toggleMenu && (
        <div className="responsive-menu-container">
          <div className="responsive-menu scale-up-center">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#whatisgpt">What is GPT?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>

            <div className="responsive-auth">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
