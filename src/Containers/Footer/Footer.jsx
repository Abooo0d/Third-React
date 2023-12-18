import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do You Want To Step To Future Before Others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links__logo">
          <img src={logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links__div">
          <h4>Get In Touch</h4>
          <p>Lorem ipsum dolor sit.</p>
          <p> 0951-745-564</p>
          <p>abdsadalden2001@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
