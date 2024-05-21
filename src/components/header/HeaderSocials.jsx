import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a target="_blank" href="https://www.youtube.com/@howtobecomeadeveloper">
        <BsYoutube />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ademiralijagic/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/Ade-mir">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
