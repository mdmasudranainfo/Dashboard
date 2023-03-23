import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const DashboardSlider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="">
            <img
              src="https://static-contributor-fp.cdnpk.net/assets/0428d11f7c222c50218c0e66112428f9.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardSlider;
