import HomeSlider from "@/components/sliders/HomeSlider"
import LineChart from '@/components/Charts/LineChart'
import { FaDiscord, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import gameData from '../../../../../dummy/gameData.json'
import { BackendURL } from "@/url"
import AuthIMG from "@/assets/AuthIMG.jpg";
import StarRating from "@/utilities/starRating/starRating";

interface IParams {
  gameid?: string;
}
async function GamePage({ params }: { params: IParams }) {
  const response = await fetch(`${BackendURL}/api/game/get/${params.gameid}`, {
    cache: "no-cache",
  });

  const gameData = await response.json();
  // const game = gameData.game[0];
  console.log(gameData)
  return (
    <div>
      <div className='axle-cut-top-bottom'>
        <HomeSlider />
      </div>

      {/* <div className='flex gap-5 my-8 justify-between'>
        
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
  
        </div> */}
      <div className=" my-5 w-full flex justify-between space-x-2">
        <div className=" flex flex-col w-[40%]">
          <div className={`  flex gap-x-2`}>
            <img src={AuthIMG.src} alt="poster" className={` w-[40%] h-[17rem] object-cover`} />
            <div className=" flex flex-col w-full px-1 gap-5 bg-white/10 backdrop-blur-md">
              <div>
                game_name
              </div>
              <p className=' border rounded-md w-fit h-fit p-[.2rem] text-[.4rem] items-center flex text-yellow-300 border-yellow-400 '>platform</p>
              <div className={` flex items-center gap-1 w-fit h-5 `}>
                {4}<StarRating count={4} width="5rem"/>
              </div>
              <div className=" flex flex-row flex-wrap gap-2 w-full">
                {[1,2,3,4,5].map((index)=>(
                <div className={` bg-[#3c938d] rounded-xl px-1 text-[.8rem]  `}>
                  genre{`[${index}]`}
                </div>))}
              </div>
            </div>
          </div>
          <div className=" flex w-full justify-end">
          <div className='bg-secondary/50 backdrop-blur-md w-fit max-w-full px-2 gap-3 py-2  mt-2  text-[#7a7a7a] flex text-2xl justify-between'> 
            <FaDiscord/>
            <FaXTwitter/>
            <FaInstagram/>
            <FaWhatsapp/>
            <FaFacebook/>
            </div>
          </div>
        </div>
        <div className={ ` flex-1 h-[16rem] bg-secondary/50 backdrop-blur-md`}>
          description
        </div>
      </div>

    </div>
  )
}

export default GamePage