import { useEffect, useRef, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

const Gallery = () => {
  const imageData = useLoaderData();
  console.log(imageData[0].image, "gallery");

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log(thumbsSwiper);
  return (
    <div className="container mt-20 mx-auto min-h-screen">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        // breakpoints={{
        //   // Responsive breakpoints
        //   576: {
        //     slidesPerView: 1,
        //     // spaceBetween: 20,
        //   },
        //   992: {
        //     slidesPerView: 2,
        //     // spaceBetween: 30,
        //   },
        //   1600: {
        //     slidesPerView: 3,
        //     // spaceBetween: 40,
        //   },
        // }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageData?.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              className="w-full mx-auto h-[50vh] md:h-[60vh]"
              src={image.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
