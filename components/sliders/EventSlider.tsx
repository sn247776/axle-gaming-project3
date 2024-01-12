'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import events from '../../dummy/events.json'
import { FaRegUser } from "react-icons/fa"
import {Swiper as swiper} from "swiper";

type Props = {}

const EventSlider = (props: Props) => {
//   const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");
  const [swiperIns,setSwiperIns] = useState<swiper | null >();
  const currDate = Date.now()
  return (
    <div>
      <Swiper
        centerInsufficientSlides={true}
        // centeredSlides={true}
      spaceBetween={50}
      // breakpoints={{
      //   400: {
      //     slidesPerView:1,
      //   },
      //   664: {
      //     slidesPerView: 2,
      //   },
      //   1145: {
      //     slidesPerView: 3,
      //   },
      // }}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        setSwiperIns(swiper)
        swiperIns?.update()
      }}
    >
      
      {events.map((event,index) =>(
        <SwiperSlide key={index}>
          {
            ({isActive}) => (
              <div className=' w-[17rem] h-[17rem] items-center justify-center flex select-none'>
                <img
                 style={{WebkitClipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`}}
                 alt={event.name}
                 src={event.faction}
                 className=' absolute -left-[0%] -top-[0%] w-[3.4rem] h-[3.4rem] z-10'
                 />
                <div
                style={{WebkitClipPath:`polygon(22.5% 4%, 14.5% 0, 100% 0, 100% 90%, 87% 100%, 0 100%, 0 17.5%, 10.1% 22.4%, 22.5% 16%)`}}
                className={` bg-[#0e0d118c]  w-full h-full  backdrop-blur-md `}
                >
                  <img
                   src={event.image}
                   alt={event.name}
                   className={` w-full h-[65%]`}
                  />
                  <div className={` pl-2 py-1 w-[90%] h-[35%] flex flex-col justify-between `}>
                  <div className=' font-bold line-clamp-2 text-[.9rem]'>
                    {event.name}
                  </div>
                    <div className=' flex flex-col w-full  '>
                      {event.subscription_only && <div 
                      style={{borderImage:'linear-gradient(0.25turn,#c084fc, rgb(255, 115, 0)) 1'}} 
                      className='border border-slate-500 text-transparent text-[.6rem] px-1 size-fit bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text  justify-center items-center flex'>
                        Subscribers only
                        </div>}
                     <div className=' flex justify-between'>
                        <div className=' font-thin text-[#969696]'>
                            {
                            
                              Math.ceil(Math.abs(new Date(event.end_date).getTime() - currDate)/86400000)
                            } days left
                        </div>
                        <div className=' flex  text-[.8rem] items-center gap-1'>
                          <FaRegUser  color={'rgb(255, 115, 100)'} size={'.8rem'}/>
                          Joined {event.joined}
                        </div>
                     </div>
                    </div>
                  </div>
                  
                </div>
        </div>
            )
          }
        </SwiperSlide>
      ))
        }
      
    </Swiper>
    </div>
  )
}

export default EventSlider