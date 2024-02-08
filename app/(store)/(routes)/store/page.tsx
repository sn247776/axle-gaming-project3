import HomeSlider from '@/components/sliders/HomeSlider'
import HomeGame from '@/components/sliders/HomeGame'
import React from 'react'
import EventSlider from '@/components/sliders/EventSlider'
import GlobalFeed from '@/components/store/GlobalFeed'
import './style.scss'


function StorePage() {
  return (
    <div className=' '>

      <div  className=' '>
      <HomeSlider/>
      </div>
        {/* <div>Hello</div>
      </div> */}

        <div className='flex flex-col w-full'>
          <div className={`st text-xl my-5 border-b border-[#fff] w-fit relative`}>
            Popular games
          </div>
          <HomeGame/>
          <div className={`st text-xl my-5 border-b border-[#fff] w-fit relative`}>
            Explore events
          </div>
          <EventSlider/>
          <div className={`st text-xl my-5 border-b border-[#fff] w-fit relative`}>
            See what's happening
          </div>
          <GlobalFeed/>
        </div>
    </div>
  )
}

export default StorePage