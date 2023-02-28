import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/bastian.jpg";
import AVTR2 from "../../assets/marie.jpg";
import AVTR3 from "../../assets/ksenia.jpg";
import AVTR4 from "../../assets/iselin.jpg";
import AVTR5 from "../../assets/balraj.jpg";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Bastian",
    review:
      "Ademir comes up with ideas easily, and his ability to question the status quo is impressive. In our daily work, he drives our team not only with constant contribution but also with his visionary mind.",
  },
  {
    avatar: AVTR2,
    name: "Marie",
    review:
      "We worked closely in a team over a periode of four months, and I couldn't have asked for a better partner! Ademir is extremely dedicated, and always askes the right questions in order to be on the right track.",
  },
  {
    avatar: AVTR3,
    name: "Ksenia",
    review:
      "I had the pleasure of working with Ademir on an extensive project and Ademir is very tidy, structured and keen to find good solutions for problems. For me, he has been a good partner and I have benefited a lot from discussing with him.",
  },
  {
    avatar: AVTR4,
    name: "Iselin",
    review:
      "I worked with Ademir on a challenging trend analysis project. I would describe him as solution-oriented and adaptable. Last but not least, he is creative, good at design, and a great collaborator!",
  },
  {
    avatar: AVTR5,
    name: "Balraj",
    review:
      "I had the pleasure of working with Ademir on a very challenging project! He is good at finding simple and creative solutions to complex challenges. He is also very helpful, motivated and has great work capacity.",
  },
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from coworkers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
