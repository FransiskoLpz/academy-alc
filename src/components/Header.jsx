import React from "react";
import logo from "../images/LogoALC.png";

function Header() {
  return (
    <div id="main">
      <div className="pr-heading">
        <h2>WELCOME TO</h2>
        <h1>
          THE ACADEMY OF <span>LANGUAGE & CULTURE</span>
        </h1>
        <p className="details">
          Unlock your language potential with our comprehensive English courses.
          Tailored for all levels, our expert instructors will guide you to
          fluency.
        </p>
        <div className="header-btns">
          {/* <a href="#" className="header-btn">
            Join Us
          </a> */}
        </div>
      </div>
      <div className="imagen">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Header;
