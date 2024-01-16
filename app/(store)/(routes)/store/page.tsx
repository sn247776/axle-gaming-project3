import HomeSlider from '@/components/sliders/HomeSlider'
import HomeGame from '@/components/sliders/HomeGame'
import React from 'react'
import EventSlider from '@/components/sliders/EventSlider'
import GlobalFeed from '@/components/store/GlobalFeed'



function StorePage() {
  return (
    <div className=' '>

      <div  className=' '>
      <HomeSlider/>
      </div>
        {/* <div>Hello</div>
      </div> */}

        <div className='flex flex-col w-full'>
          <HomeGame/>
          <EventSlider/>
          <GlobalFeed/>
        </div>
    </div>
  )
}

export default StorePage