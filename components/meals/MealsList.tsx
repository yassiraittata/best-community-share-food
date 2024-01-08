"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MealItem from "./MealItem";

const MealsList = () => {
  return (
    <section className="max-w-[80%] mx-auto p-5 h-fit mt-10">
      <h2 className="text-7xl font-extrabold text-secodary/30 font-oswald uppercase">
        Popular meals
      </h2>
      <ul className="mt-5">
        <Swiper
          slidesPerView={2.4}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="w-full"
        >
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
          <SwiperSlide>
            <MealItem />
          </SwiperSlide>
        </Swiper>
      </ul>
    </section>
  );
};

export default MealsList;
