import HomeSlider from "@/components/sliders/HomeSlider"
import LineChart from '@/components/Charts/LineChart'
import { FaDiscord, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import gameData from '../../../../../dummy/gameData.json'
import { BackendURL } from "@/url"


interface IParams {
  gameid?: string;
}
async function GamePage({ params }: { params: IParams }) {
  const response = await fetch(`${BackendURL}/api/game/get/${params.gameid}`, {
    cache: "no-cache",
  });

  const gameData = await response.json();
  const game = gameData.game[0];
  console.log(gameData)
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