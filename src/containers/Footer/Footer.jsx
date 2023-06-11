import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer padding">
      <div className="container">
        <div className="heading">
          <h1 className="gradient_text">
            Do you want to step in to the future before others?
          </h1>
        </div>

        <div className="button">
          <p>Request Early Access</p>
        </div>

        <div className="footer-menu">
          <div className="footer-menu-logo">
            <img src="assets/logo.png" alt="logo" />
            <p>All Rights Reserved</p>
          </div>
          <div className="footer-menu-div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="footer-menu-div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="footer-menu-div">
            <h4>Get in touch</h4>
            <p>Cihan Özcan</p>
            <p>+90 546 717 74 21</p>
            <p>ozcancihan714@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
