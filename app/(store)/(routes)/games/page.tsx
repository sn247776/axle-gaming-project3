import React from 'react'
import games from '../../../../dummy/games.json'
import './style.scss'
import Link from 'next/link'
import { BackendURL } from '@/url';

async function Games({ searchParams }: any) {

  const pageNumber = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const search = typeof searchParams.search === 'string' ? searchParams.search : "";


  const res = await fetch(`${BackendURL}/api/game/getall?pageSize=10`, {
    cache: 'no-cache'
  })

  const gamesData: any = await res.json()


  return (
    <div>
      <div className=' grid grid-cols-3 gap-y-10 pt-5 gap-x-4'>
        {gamesData.games.map((game: any, index: number) => (
          <Link
            key={game._id}
            href={`/games/${game.slug}`}
            className=' card relative w-[15rem] h-[18rem] overflow-hidden p-0 group'>
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
        ))}
      </div>


    </div>
  )
}

export default Games