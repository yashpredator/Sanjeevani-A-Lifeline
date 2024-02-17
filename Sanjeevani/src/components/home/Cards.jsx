import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./Service";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[600px] bg-white">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-8 mb-20 group relative shadow-lg text-white rounded-xl 
            px-6 py-8 lg:h-[320px] lg:w-[250px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-4">
                <item.icon className="text-blue-600 group-hover:text-blue-400" />
                <h1 className="text-xl lg:text-2xl">Neurology</h1>
                <p className="lg:text-[18px]">{item.content} </p>
                <button className='mt-8 bg-blue-800 py-1 rounded-full size-sm' onClick={()=>{
                  window.location.href="/Disease"
                }}>Book Now</button>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 text-white group-hover:text-blue-500 
              group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;


