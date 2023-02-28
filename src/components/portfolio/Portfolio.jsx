import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/brights-lite.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MERN Stack Social Media Platform",
    github: "https://github.com/Ade-mir/Brights-Lite",
    demo: "https://www.canva.com/design/DAFapZZx0GI/205p6bLMxmlp8Z4OjkvcMw/view?utm_content=DAFapZZx0GI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
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
