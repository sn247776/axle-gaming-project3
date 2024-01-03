import React from 'react'
import games from '../../../../dummy/games.json'
import './style.scss'
function Games() {

  return (
    <div>
    <div className=' grid grid-cols-3 pt-5 gap-4'>
      {
        games.map((game,index)=>(
          <div key={index}
               className=' relative w-[15rem] h-[18rem] overflow-hidden'>
                <img
                 style={{WebkitClipPath:'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 4%)'}}
                 className=' w-[90%] h-[90%] top-0 left-0 '
                 src={game.image}
                />
                <div className=' absolute left-0 bottom-5 z-10 h-[50%] w-[90%] bg-gradient-to-t from-white to-transparent'/>
                
            <div
             style={{WebkitClipPath:"polygon(88% 61%, 87% 0, 95% 0, 100% 5%, 100% 92%, 91% 100%, 5% 100%, 0 96%, 0 61%)"}}
             className=' bottom-0 right-0 w-full h-[90%] bg-[#171621] absolute z-20'>
             <div className='absolute bottom-0 h-[39%] w-full left-0 pl-2 pr-4 flex flex-col justify-evenly'>
              <div className=' flex w-full justify-between'>
                <p className=' text-[#fff] font-bold text-[1rem] truncate text-ellipsis w-[80%] '>{game.name}</p>
                <p className=' border rounded-md w-fit h-fit p-[.2rem] text-[.4rem] items-center flex text-yellow-300 border-yellow-400 '>{game.platform}</p>
              </div>
              <div>
                {
                  game.is_free ? 
                  <div className=' border rounded-md w-fit p-1 text-[.8rem] border-purple-400'>
                    Free to Play
                  </div> :
                  <div className=' flex border rounded-md w-fit p-1 text-[.8rem] border-yellow-400'>
                    <p className=' text-yellow-400'>Price:{' '}</p>
                    <p className=' text-yellow-200'>{game.price}</p>
                  </div>
                }
              </div>
              <div className=' flex gap-1 flex-wrap w-[85%]'>
                {
                  game.genre.map((genre,gi)=>(
                    <div className=' rounded-xl bg-purple-500 w-fit px-2 h-[1.0rem] text-[.6rem]'>
                      {genre}
                    </div>
                  ))
                }
              </div>
             </div>
             <div className=' absolute bottom-0 right-0 w-full'>
              <div className=' neon-sticks absolute -rotate-[45deg] h-[.4rem] w-[18%] rounded-xl right-[.4rem] bottom-[1.7rem] '/>
              <div className=' neon-sticks absolute -rotate-[45deg] h-[.4rem] w-[10%] rounded-xl right-[.4rem] bottom-[1.1rem] '/>
             </div>
            </div>
          </div>
        ))
      }
    </div>
      
      
    </div>
  )
}

export default Games