import HomeSlider from '@/components/sliders/HomeSlider'
import React from 'react'
import LineChart from '@/components/Charts/LineChart'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function GamePage() {
  return (
    <div>
      <div className='axle-cut-top-bottom'>
      <HomeSlider/>
      </div>
   
      <div className='flex gap-5 my-8 justify-between'>
      
        <div className='flex flex-col gap-5'>
          <div className='bg-secondary/50 min-h-[300px] p-5 '>Meet your new best friend ‘til the end. Dead by Daylight: Chucky brings an iconic horror legend into The Fog with a new Killer: The Good Guy - Chucky. Purchasing this add-on unlocks an exclusive Charm: Good Guys Box.</div>

          <div className='flex justify-end'> 
          
          <div className='bg-secondary/50 min-w-[350px] p-5 flex text-4xl justify-between'> 
          <FaDiscord/>
          <FaXTwitter/>
          <FaInstagram/>
          <FaWhatsapp/>
          <FaFacebook/>
          </div>
          </div>
        </div>
        <div className='bg-secondary/50 min-w-[350px]'><LineChart/></div>

      </div>
      
    </div>
  )
}

export default GamePage