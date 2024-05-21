import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
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
                2+ Years Dev XP
              </small> <br />
              <small>
                14,000+ Subscribers
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Sc. Mechanical Engineering
                <br />
                M.Sc. Innovation &
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
            large scale Product Information Management system. My primary tech stack is Angular 17, Material Design, TypeScript, Node, and LESS / SASS for styling. Git, Jira and IntelliJ is used for team collaboration and deployment.
            My day-to-day consists of a daily stand-up and biweekly sprints. My core responsibility centers on creating and maintaining components for new features that interact with our large databases as
            well as creating and designing an effective user experience.
          </p>
          <p>
            When I'm not coding at my job, I teach coding on my YouTube channel with
            14,000+ subscribers, called <a href="https://www.youtube.com/@howtobecomeadeveloper">How To Become A Developer</a>, which has been featured by freeCodeCamp.org. I teach everything from HTML, CSS, JavaScript, to libraries like React, and CSS frameworks like Tailwind CSS.
          </p>
          {/* <p>
            As a problem solver at heart I have a background in Engineering,
            Product Design, & Entrepreneurship. I previously also aquired funding by Innovation Norway and ran a startup called Streets of Oslo. In a past life I also worked as a Consultant in TietoEvry within Product Development and Pre-Sales of RPA technology.
          </p>
          <p>
            In 2022, after a career focused on the business side of IT, I
            immersed myself in the technical side, and become a frontend
            developer through Academic Work's 12-week intensive training in
            JavaScript. I then worked as a JavaScript Consultant for Academic
            Work before continuing my career as a Frontend Developer for
            Integration Systems AS.
          </p> */}
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
