import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Ademir image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Sc. Mechanical Engineering, M.Sc. Innovation &
                Entrepreneurship
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                3+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I'm a problem solver with a background in Engineering, Product
            Design, & Entrepreneurship. Alongside my studies, I started Streets
            of Oslo AS, a company which sold backpacks through social media.
            Later I worked as a Consultant in TietoEvry within Product
            Development and Pre-Sales of RPA technology.
          </p>
          <p>
            In recent years, I've worked in the Coaching Industry with Sales
            Automation, Website, & Advertisement Management. I thrive in a role
            where I can use my broad knowledge to break down complex problems
            and where the tasks require interaction between Design &
            Functionality.
          </p>
          <p>
            After a career focused on the business side of IT, I've immersed
            myself in the technical side, and become a fullstack developer
            through Academic Work's 12-week intensive training in JavaScript.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
