'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import gameDiscount from '../../dummy/gameDiscount.json'
import './styles/HomeGame.scss'
const HomeGame = ()=>{
    return(
        <Swiper
        centerInsufficientSlides={true}
        centeredSlides={true}
      spaceBetween={50}
      breakpoints={{
        650: {
          slidesPerView:1,
        },
        1144: {
          slidesPerView: 1,
        },
        1145: {
          slidesPerView: 2,
        },
      }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {gameDiscount.map((game,index) =>(
        <SwiperSlide key={index}>
          {
            ({isActive}) => (
              <div className=' h-[20rem] items-center justify-center flex '>
    
        <div className={` relative w-[20rem] h-[16rem] justify-between flex flex-row pl-3 pt-5 pb-5 ${isActive ? 'gcontrol group' : ''}`}>
          <div className=' group-hover:ml-[-5rem] h-[14rem] w-[20rem] py-3 pl-2 ambient-container transition-all ease-in-out duration-500'>
          <img src={game.image} 
          className='   mt-1 h-full w-[20rem] object-cover ambient-visible gcard'/>
           <img src={game.image} 
          className='   mt-1 h-full w-[20rem] object-cover ambient-shadow'/>
          </div>
          
          <div 
          style={{WebkitMaskImage:`url(${'./eventCardHolder.svg'})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat'}} 
          className=' left-[6.7rem] absolute w-[25rem] h-full items-center flex bg-[#181922] event-card mr-[400rem] px-1'>
           <div className=' select-none w-full h-full items-center justify-center'>
           <p className=' ml-[8rem] mt-[1.5rem] mb-auto text-[#29294e] font-bold text-[2.5rem] text-ellipsis truncate'> {game.name}</p>
            <p className=' ml-[8rem] text-[#8ca5ff] text-ellipsis line-clamp-3'>{game.short_description}</p>
            <div className='ml-[2.5rem] mt-[1rem] flex h-[3rem] w-full flex-row space-x-4 justify-center'>
              {/* <img className=' w-[2rem] h-[2rem]' src='./assets/logos/eth.svg'/> */}
              <div style={{WebkitMaskImage: 'url(./next.svg)', WebkitMaskSize:'cover', WebkitMaskRepeat:'no-repeat'}} className=' w-[2rem] h-[2rem] bg-slate-400' />
              <div style={{WebkitMaskImage: 'url(./vercel.svg)', WebkitMaskSize:'cover', WebkitMaskRepeat:'no-repeat'}} className=' w-[2rem] h-[2rem] bg-slate-400' />
              {/* <img className=' w-[10rem] h-[2rem]' src='./assets/logos/binance.png' /> */}
            </div>
            <div className={`  ${isActive ? 'drop-shadow-[0_0_10px_#004cff] animate-flicker' : ' '} absolute w-[2rem] h-[2rem] bottom-[26%] left-[13%] delay-700`}>
            <div className={`w-[1rem] h-[1rem] ${isActive ? 'scale-150 rotate-180 bg-[#86aaff]' : 'scale-100 rotate-0 bg-slate-500'} triangle transition-all duration-500 ease-in-out delay-100`}/>
    
            </div>
           </div>
            </div>
          <div className=' z-20 right-0 bottom-0 m-auto w-[1.5rem] h-[1.5rem] items-center justify-center flex '>
        </div>
        </div>
        
        </div>
            )
          }
        </SwiperSlide>
      ))
        }
      
    </Swiper>
    )
}

export default HomeGame