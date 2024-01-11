import HomeSlider from '@/components/sliders/HomeSlider'
import HomeGame from '@/components/sliders/HomeGame'
import React from 'react'
import EventSlider from '@/components/sliders/EventSlider'



function StorePage() {
  return (
    <div className=' '>

      <div  className=' '>
      <HomeSlider/>
      </div>
        {/* <div>Hello</div>
      </div> */}

        <div>
          <HomeGame/>
          <EventSlider/>
          <HomeGame/>
          <HomeGame/>
        </div>
    </div>
  )
}

export default StorePage