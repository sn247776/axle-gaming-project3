import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Badge1 from '@/assets/1.png'
import Badge2 from '@/assets/2.png'
import Badge3 from '@/assets/3.png'
import Badge4 from '@/assets/4.png'
import ExpBar from "@/utilities/expBar/expBar";

function ProfileBar() {
  return (
    <div className="w-[30vw] flex flex-col gap-6 sticky top-[70px]" 
    style={{maxHeight:"calc(100vh - 90px)"}}
    >
      <div className="bg-secondary/50 flex flex-col items-center py-4 px-5">

        <div className=" flex gap-5 w-full">
        <div className="relative pb-2">
        <Avatar className="h-[10rem] w-[10rem]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="profile-level">
            45
        </div>
        </div>
        <div className=" w-full">
        <div className=" text-white font-bold text-[1.2rem]">Sagar Nirwal</div> 
        <div className="font-semibold text-gray-500">@Sagar247776</div>
        <div className=" w-full space-y-1 flex flex-col">
        <div className=" text-[.7rem] ml-auto mr-0 float-end text-white">12000 XP / 25600</div>
        <ExpBar percent={35} width={"100%"} height={"10px"} barWidth="15px" />
        </div>
        <div className=" mt-5">
          <div className=" mt-5 bg-orange-400 w-fit rounded-xl px-1 text-[.8rem] items-center">
            Maniac
          </div>
        </div>
        </div>

        </div>
        <div className="flex justify-between my-2">
    <div className="text-center border-r-2 border-gray-400 pr-4">
        <p className="mb-1">Games</p>
        <p>10</p>
    </div>
    <div className="text-center border-r-2 border-gray-400 px-4">
        <p className="mb-1">Achievements</p>
        <p>15</p>
    </div>
    <div className="text-center pl-4">
        <p className="mb-1">Likes</p>
        <p>20</p>
    </div>
</div>

        
        <div className="flex justify-between items-center h-full px-2 select-none pointer-events-none">
        <Image src={Badge1} alt="bages" width={60}/>
        <Image src={Badge2} alt="bages" width={60} />
        <Image src={Badge3} alt="bages" width={60}/>
        <Image src={Badge4} alt="bages" width={60}/>
        </div>

      </div>
      
      <div className="bg-secondary/50 min-h-[120px] items-center justify-center flex">

      <div className="flex justify-between items-center gap-2 h-full px-2 select-none pointer-events-none">
        <Image src={Badge1} alt="bages" width={65}/>
        <Image src={Badge2} alt="bages" width={65} />
        <Image src={Badge3} alt="bages" width={65}/>
        <Image src={Badge4} alt="bages" width={65}/>
        </div>

      </div>
      <div className="bg-secondary/50 min-h-[120px]"> </div>
    </div>
  );
}

export default ProfileBar;
