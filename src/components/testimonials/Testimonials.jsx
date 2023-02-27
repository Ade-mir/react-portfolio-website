import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/ademir.png";

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
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In unde ratione vero ipsam quasi ab, porro repellat quam perferendis obcaecati dolores natus. Eos voluptate fugit doloribus ipsa nostrum hic quia.",
  },
  {
    avatar: AVTR1,
    name: "Jonathan Van Ness",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In unde ratione vero ipsam quasi ab, porro repellat quam perferendis obcaecati dolores natus. Eos voluptate fugit doloribus ipsa nostrum hic quia.",
  },
  {
    avatar: AVTR1,
    name: "Oprah Winfrey",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In unde ratione vero ipsam quasi ab, porro repellat quam perferendis obcaecati dolores natus. Eos voluptate fugit doloribus ipsa nostrum hic quia.",
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
