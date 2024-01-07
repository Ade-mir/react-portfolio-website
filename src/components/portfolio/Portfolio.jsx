import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/brights-lite.png";
import IMG2 from "../../assets/blog.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/brochure.png";
import IMG5 from "../../assets/Portfolio3.png";
import IMG6 from "../../assets/Portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MERN Stack Social Media Platform",
    github: "https://github.com/Ade-mir/MERN-social-media-platform",
    demo: "https://peaceful-cranachan-56056a.netlify.app/",
    brief:
      "https://www.canva.com/design/DAFapZZx0GI/205p6bLMxmlp8Z4OjkvcMw/view?utm_content=DAFapZZx0GI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    id: 2,
    image: IMG2,
    title: "NextJS | TailwindCSS | GraphQL Blog",
    github: "https://github.com/Ade-mir/nextjs-blog",
    demo: "https://musical-puffpuff-ff26f2.netlify.app/",
    brief: "https://github.com/Ade-mir/nextjs-blog/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/Ade-mir/javascript-calculator",
    demo: "https://fabulous-otter-35c137.netlify.app/",
    brief:
      "https://github.com/Ade-mir/javascript-calculator/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "React Brochure Site",
    github: "https://github.com/Ade-mir/brochure-site",
    demo: "https://deluxe-gumption-ef08f4.netlify.app/",
    brief: "https://github.com/Ade-mir/brochure-site/blob/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "JavaScript | HTML | CSS Portfolio",
    github: "https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2",
    demo: "https://thriving-dragon-a3fcd9.netlify.app/",
    brief: "https://youtu.be/ldwlOzRvYOU",
  },
  {
    id: 6,
    image: IMG6,
    title: "JavaScript | HTML | CSS Animation Head",
    github: "https://github.com/Ade-mir/animated-head-portfolio",
    demo: "https://animated-head-portfolio.netlify.app/",
    brief: "https://youtu.be/pcFF_IIpMbc",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on YouTube</h5>
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
