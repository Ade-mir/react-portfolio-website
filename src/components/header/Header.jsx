import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/profile2 (1).png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prashant Pandey</h1>
        <h5 className="text-light">Data Analytics</h5>
        <CTA />
        <HeaderSocials />
        <div className="ademir">
          <img src={header_picture} alt="Prashant Pandey" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
