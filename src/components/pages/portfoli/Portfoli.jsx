import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/thumbs';

import "./portfoli.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

// img
import img1 from "../../../img/photo_2024-02-03_09-47-31.jpg";
import img2 from "../../../img/photo_2024-02-03_09-47-36.jpg";
import img3 from "../../../img/photo_2024-02-03_09-50-51.jpg";
import img4 from "../../../img/photo_2024-02-03_09-50-56.jpg";
import Navbar from "../../nabar/Navbar";
import Footer from "../../footer/Footer";
import Card from "../portfoli-card/Card";
// import required modules
function Portfoli() {
  return (
    <>
      <Navbar />

      <div className="container ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={img1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="section">
        <Card/>
      </div>
      <Footer />
    </>
  );
}
export default Portfoli;
