import React from "react";
 
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "40%",color:"yellow", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com/in/nikhil-kumar-a16964171" target="__blank">
         Nikhil Kumar
        </a>
      </span>
      <div className="iconContainer">
      <a href="https://www.instagram.com/inikhilsharma28/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-a16964171" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;