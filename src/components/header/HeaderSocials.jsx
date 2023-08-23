import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/prashant-pandey-818938216/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Prashant7067">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
