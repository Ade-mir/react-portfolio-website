import React from "react";
import CV from "../../assets/Prashant PandeyResume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Info
      </a>
    </div>
  );
};

export default CTA;
