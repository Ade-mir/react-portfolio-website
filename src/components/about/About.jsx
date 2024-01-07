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
                1,5 years <br /> Developer Experience
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
                40+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I'm a frontend developer currently working with the GUI of FEED, a
            large scale Product Information Management system using Angular,
            NodeJS, TypeScript, HTML, LESS, Git, IntelliJ, Jira & Material UI.
            My daily responsibilities center around creating and maintaining
            user interfaces that comunicating and exchanging data with API's as
            well as creating and designing an effective user experience.
          </p>
          <p>
            When I'm not coding at my job, I run a coding YouTube channel with
            9K subscribers and counting, called How To Become A Developer, which
            has also been shared by freeCodeCamp.org. This is the best place to
            see my code and reasoning. Check it out
            <a href="https://www.youtube.com/@howtobecomeadeveloper"> HERE</a>.
          </p>
          <p>
            As a problem solver at heart I have a background in Engineering,
            Product Design, & Entrepreneurship. Alongside my studies, I started
            Streets of Oslo AS, a company based in StartUpLab and MESH and
            funded by Innovation Norway which sold backpacks through social
            media. Later I worked as a Consultant in TietoEvry within Product
            Development and Pre-Sales of RPA technology.
          </p>
          <p>
            In 2022, after a career focused on the business side of IT, I
            immersed myself in the technical side, and become a frontend
            developer through Academic Work's 12-week intensive training in
            JavaScript. I then worked as a JavaScript Consultant for Academic
            Work before continuing my career as a Frontend Developer for
            Integration Systems AS.
          </p>
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
