import React from 'react'
import globalFeed from '../../dummy/globalFeed.json'
import { FaComment, FaHeart, FaShare, FaThumbsUp } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'

type Props = {}

const GlobalFeed = (props: Props) => {

  return (
    <div className={` w-full h-fit flex flex-col justify-center items-center gap-5 py-5  bg-slate-500 `}>
      {
        globalFeed.map((feed, index) => (
          <div key={index}
            className={` w-[35rem] h-fit min-h-[20rem]  relative `}>
            <img
              style={{ WebkitClipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)` }}
              src={feed.faction.image}
              alt={feed.faction.name}
              className=' absolute -left-[0%] -top-[0%] w-[3.2rem] h-[3rem] z-20' />
            <div
              className={`   w-full h-full flex flex-col items-center justify-center `}>
              <div
                style={{ WebkitClipPath: `polygon(10% 73%, 10% 18.5%, 6.5% 0, 100% 0%, 100% 110%, 0 110%, 0% 80%, 4.5% 100%)` }}

                className={` bg-[#0f0e17] pl-[4.5rem]  w-full h-[3.35rem] `}
              >
                <div>{feed.faction.name}</div>
                <div>{feed.timestamp}</div>
              </div>
              <div className={` m-0 bg-[#0f0e17]  w-full`}>
                <div className={`px-5 py-1  line-clamp-3`}>
                  {feed.text}
                </div>
                <div className={` w-full h-fit max-h-[85vh]`}>
                  <img
                    src={feed.media.url}
                    alt={feed.user.name}
                    className={` w-full h-full `} />
                </div>
                <div className={` px-5 w-full flex items-center gap-3  justify-between`}>
                  <div className=' text-[#565656]'>
                    by {feed.user.name}
                  </div>
                  <div className={` flex items-center divide-x-2 `}>
                    <div className=' flex items-center gap-1 px-2'>
                      {feed.likes}
                      <FaHeart />
                    </div>
                    <div className={` flex items-center gap-1 px-2`}>
                      {feed.comments.length}
                      <FaRegMessage />
                    </div>
                  </div>
                </div>
                <div className={` w-full h-[2.2rem] flex flex-row  items-center justify-evenly`}>
                  <div className={` flex  bg-clip-content items-center gap-1`}>
                    <FaThumbsUp />
                    Likes
                  </div>
                  <div className={` flex px-2  items-center gap-1`}>
                    <FaComment />
                    Comment
                  </div>
                  <div className={` flex items-center gap-1`}>
                    <FaShare />
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default GlobalFeed