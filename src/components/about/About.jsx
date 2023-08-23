import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile2 (2).jpeg";
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
            <img src={profile_picture} alt="About Prashant image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                2 Months + <br /> Data Analytics
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                BTech in Data Science , Major Data Science
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
            I'm a problem solver with a background in Engineering, Data 
            Analytics,Data Engineer & Data Science. Passionate data analytics professional 
            with a strong foundation in statistics and programming. Experienced in deriving insights from 
            complex datasets using Power Bi. Detail-oriented and adept at transforming raw data into actionable strategies. 
            Eager to contribute expertise in Data Analytics to drive impactful projects
          </p>
          <p>
          My journey in the field of data analytics began with a strong academic background in 
          Btech in Data Science. Since then, I have honed my skills through hands-on experience in 
          different projects where I had the opportunity to apply my analytical 
          prowess to real-world challenges.
          </p>
          <p>
          As I continue to expand my skill set and stay current with the latest trends in data analytics, 
          I am committed to contributing my expertise to projects that make a meaningful impact. 
          If you're seeking a passionate and detail-oriented data analytics professional, I would welcome 
          the opportunity to connect.
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
