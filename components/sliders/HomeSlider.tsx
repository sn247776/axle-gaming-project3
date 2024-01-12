"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DummyData from "@/dummy/DummyData";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./styles/HomeSlider.scss"
import {Swiper as swiper} from "swiper";
// import swiper from "swiper";

export default function HomeSlider() {
  const swiperRef: any = useRef(null);
  const paginationRef:any = useRef(null);
  const [swiperIns,setSwiperIns] = useState<swiper | null >();
  const paginationStyle:any = {
    '--swiper-pagination-color': '#6D28D9',
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  useEffect(()=>{
    console.log(swiperRef)
    // swiperRef.pagination.update()
  },[swiperRef])
  return (
    <div className="relative w-full ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={async (swiper) => {
          setSwiperIns(swiper);
          swiperRef.current = swiper
          // if (swiper){
          //   // swiper.navigation.update()
          //   swiper.pagination.init()
          // swiper.pagination.update()}
          
        }}
        className="home-slider-main"
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        
      >
        {DummyData.map((slide, index) => (
          <SwiperSlide className="home-slider" key={slide._id}>
            <div className="home-slide-text">
              <h2 className="text-6xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
              <div>
                <Button className="text-base px-5 py-3">PLAY NOW</Button>
              </div>
            </div>
            <img src={slide.poster} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="home-slider-pagination">
      <div className="bg-white/25 backdrop-blur-sm flex gap-2 items-center p-1 rounded-full">
        <div onClick={handlePrev} className="bg-primary/40 rounded-full p-1 hover:bg-primary cursor-pointer duration-100">
          <ChevronLeft />
        </div>

        <div ref={paginationRef} style={paginationStyle} className=" flex gap-1" />

        <div onClick={handleNext} className="bg-primary/40 rounded-full p-1 hover:bg-primary cursor-pointer duration-100">
          <ChevronRight />
        </div>
      </div>
      </div>
      
    </div>
  );
}