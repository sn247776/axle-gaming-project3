'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import gameDiscount from '../../dummy/gameDiscount.json'
import './styles/HomeGame.scss'
import { useEffect, useState } from "react"
import { Swiper as swiper } from "swiper";
import axios from "axios"
import Link from "next/link"

const HomeGame = () => {
  const [swiperIns, setSwiperIns] = useState<swiper | null>();

  const [gameData, setGameData]:any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kind-pear-puffer-tie.cyclic.cloud/api/game/getall?pageSize=10');
        setGameData(response.data);
      } catch (error) {

        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <div>
      <Swiper
        centerInsufficientSlides={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
          setSwiperIns(swiper)
          swiperIns?.update()
        }}
      >

{gameData && (
  <Swiper>
    {gameData.games.map((game:any, index:any) => (
      <SwiperSlide key={index}>
        {({ isActive }) => (
          // <div className=' h-[20rem] items-center justify-center flex '>
          //   <div className={` relative w-[20rem] h-[16rem] justify-between flex flex-row pl-3 pt-5 pb-5 ${isActive ? 'gcontrol group' : ''}`}>
          //     <div className=' group-hover:ml-[-5rem] h-[14rem] w-[20rem] py-3 pl-2 ambient-container transition-all ease-in-out duration-500'>
          //       <img src={game.poster} className='mt-1 h-full w-[20rem] object-cover ambient-visible gcard' />
          //       <img src={game.poster} className='mt-1 h-full w-[20rem] object-cover ambient-shadow' />
          //     </div>

          //     <div style={{ WebkitMaskImage: `url(${'./eventCardHolder.svg'})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat' }} className='left-[6.7rem] absolute w-[25rem] h-full items-center flex bg-[#181922] event-card mr-[400rem] px-1'>
          //       <div className='select-none w-full h-full items-center justify-center'>
          //         <p className='ml-[8rem] mt-[1.5rem] mb-auto text-[#29294e] font-bold text-[2.5rem] text-ellipsis truncate'>{game.game_name}</p>
          //         <p className='ml-[8rem] text-[#8ca5ff] text-ellipsis line-clamp-3'>{game.summary}</p>
          //         <div className='ml-[2.5rem] mt-[1rem] flex h-[3rem] w-full flex-row space-x-4 justify-center'>
                   
          //           {/* {game.platform.map((platform, platformIndex) => (
          //             <div key={platformIndex} style={{ WebkitMaskImage: `url(${platform.logo})`, WebkitMaskSize: 'cover', WebkitMaskRepeat: 'no-repeat' }} className='w-[2rem] h-[2rem] bg-slate-400' />
          //           ))} */}
          //         </div>
          //         <div className={` ${isActive ? 'drop-shadow-[0_0_10px_#004cff] animate-flicker' : ' '} absolute w-[2rem] h-[2rem] bottom-[26%] left-[13%] delay-700`}>
          //           <div className={`w-[1rem] h-[1rem] ${isActive ? 'scale-150 rotate-180 bg-[#86aaff]' : 'scale-100 rotate-0 bg-slate-500'} triangle transition-all duration-500 ease-in-out delay-100`} />
          //         </div>
          //       </div>
          //     </div>
          //     <div className='z-20 right-0 bottom-0 m-auto w-[1.5rem] h-[1.5rem] items-center justify-center flex '></div>
          //   </div>
          // </div>

           //1--------------


           <Link
            key={game._id}
            href={`/games/${game.slug}`}
            className=' card block relative w-[15rem] h-[18rem] overflow-hidden p-0 group'>
            <img
              style={{ WebkitClipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 5%)' }}
              className=' w-full h-[90%] top-0 left-0 '
              src={game.poster}
            />
            <div className={` hidden group-hover:block absolute left-0 bottom-10 z-10 h-[50%] w-full bg-gradient-to-t from-white/50 to-transparent`} />

            <div
              style={{ WebkitClipPath: "polygon(110% 61%, 100% 88.5%, 87.75% 100%, 5% 110%, -1% 95%, -1% 61%)" }}
              className=' translate-x-0 bottom-0 left-0 right-auto w-full h-[90%] bg-[#171621] absolute z-20'>
              <div className='absolute bottom-0 h-[39%] w-full left-0 pl-2 pr-4 flex flex-col justify-evenly'>
                <div className=' flex w-full justify-between'>
                  <p className=' text-[#808ae7] font-bold text-[1rem] truncate text-ellipsis w-[80%] '>{game.game_name}</p>
                  <p className=' border rounded-md w-fit h-fit p-[.2rem] text-[.4rem] items-center flex text-yellow-300 border-yellow-400 '>{game.gameBlockchain || 'N/A'}</p>
                </div>
                <div>

                  <div className=' border rounded-md w-fit p-1 text-[.8rem] border-purple-400'>
                    Free to Play
                  </div>
                </div>
                <div className=' flex gap-1 flex-wrap w-[85%]'>
                  {/* {
                  game.genre.map((genre,gi)=>(
                    <div key={gi} className=' rounded-xl bg-purple-500 w-fit px-2 h-[1.0rem] text-[.6rem]'>
                      {genre}
                    </div>
                  ))
                } */}
                </div>
              </div>
              {/* <div className=' absolute bottom-0 right-0 w-full'>
              <div className=' neon-sticks absolute -rotate-[45deg] h-[.4rem] w-[18%] rounded-xl right-[.4rem] bottom-[1.7rem] '/>
              <div className=' neon-sticks absolute -rotate-[45deg] h-[.4rem] w-[10%] rounded-xl right-[.4rem] bottom-[1.1rem] '/>
             </div> */}
             
            </div>
            <span/>
          </Link>

        )}
      </SwiperSlide>
    ))}
  </Swiper>
)}


      </Swiper>
    </div>
  )
}

export default HomeGame