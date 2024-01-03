import HomeSlider from '@/components/sliders/HomeSlider'
import HomeGame from '@/components/sliders/HomeGame'
import React from 'react'


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
          <HomeGame/>
          <HomeGame/>
          <HomeGame/>
        </div>
    </div>
  )
}

export default StorePage