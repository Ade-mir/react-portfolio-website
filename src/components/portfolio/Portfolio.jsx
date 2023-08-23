import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/ipl anaylsis.png";
import IMG2 from "../../assets/real estate.png";
import IMG3 from "../../assets/home task.jpeg";
import IMG4 from "../../assets/Anomlies detection.png";
import IMG5 from "../../assets/hr.png";
import IMG6 from "../../assets/Sales Analysis.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "IPL Data Analysis | Power Bi",
    github: "https://github.com/Prashant7067/ipl_analysis",
    demo: "https://github.com/Prashant7067/ipl_analysis/blob/main/ipl%20analysis.png",
    brief:
      "https://github.com/Prashant7067/ipl_analysis/blob/main/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dragon Real Estate | Python",
    github: "https://github.com/Prashant7067/Dragon-Real-Estate",
    demo: "https://github.com/Prashant7067/Dragon-Real-Estate/blob/main/Dragon%20Real%20Estate/Output%20from%20different%20models",
    brief: "https://github.com/Prashant7067/Dragon-Real-Estate/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Home Task Analysis | Power Bi",
    github: "https://github.com/Prashant7067/Home-Task",
    demo: "https://github.com/Prashant7067/Home-Task/blob/main/video1087559079.mp4",
    brief:
      "https://github.com/Prashant7067/Home-Task/blob/main/Assignment.docx",
  },
  {
    id: 4,
    image: IMG4,
    title: "Anomalies Detection in Time Series Data | Research",
    github: "https://github.com/Prashant7067/Research_Anomlies_Detection",
    demo: "https://www.canva.com/design/DAFkRCr813Y/afOtVFbEvTq92oZX0uA15Q/edit",
    brief: "https://github.com/Prashant7067/Research_Anomlies_Detection",
  },
  {
    id: 5,
    image: IMG5,
    title: "HR Analysis | Power BI",
    github: "https://github.com/Prashant7067/data_analytics_project",
    demo: "https://github.com/Prashant7067/data_analytics_project/blob/main/hr%20analysis.png",
    brief: "https://github.com/Prashant7067/data_analytics_project",
  },
  {
    id: 6,
    image: IMG6,
    title: "Sales Analysis | Python",
    github: "https://github.com/Prashant7067/Sales_Analysis",
    demo: "https://github.com/Prashant7067/Sales_Analysis",
    brief: "https://github.com/Prashant7067/Sales_Analysis/tree/main/SalesAnalysis/Output",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
