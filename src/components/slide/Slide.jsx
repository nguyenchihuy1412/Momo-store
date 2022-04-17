import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./slide.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slide = ({ slides }) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySlide"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={slide} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slide;
