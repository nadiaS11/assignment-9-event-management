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
            <img className="w-[800px] h-[50vh]" src={image.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imageData?.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              style={{
                backgroundImage: `url( ${image.image})`,
                backgroundRepeat: "no-repeat",
                height: "60vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="rounded  flex flex-col justify-end items-center mt-10 bg-blend-overlay bg-[#a89d84be] "
            ></div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
