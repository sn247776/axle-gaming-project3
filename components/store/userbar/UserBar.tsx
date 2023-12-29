"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Img123 from "@/assets/123.png"
import Badge1 from '@/assets/1.png'
import Badge2 from '@/assets/2.png'
import Badge3 from '@/assets/3.png'
import Badge4 from '@/assets/4.png'

import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";

function UserBar() {
  const [activeTab, setActiveTab] = useState("people");

  const tabContent: any = {
    people: <div>people</div>,
    group: <div>group</div>,
    chat: <div>chat</div>,
  };

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* <div className="flex justify-around items-center p-2 bg-secondary border-b-2 border-white/50">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className="text-xl">Messaging</h4>
      </div> */}

      <div className="p-2 bg-secondary/50">
        <div className="relative">
        <img src="https://res.cloudinary.com/dd10xtpwd/image/upload/v1701239612/games/fyfhmcefuwgjljh0jtce.jpg" alt="cover"/>
        <div className="absolute bottom-2 left-2 bg-secondary/80 p-1 rounded-full">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        </div>

        <div className="flex items-center flex-col gap-3">
          <h6 className="text-sm p-2 font-semibold">Lvl 100</h6>
          {/* <div className="flex justify-center"><p className="bg-primary px-4 rounded-full">Token</p></div>
          <div className="flex justify-between items-center h-full px-2 select-none pointer-events-none">
        <Image src={Badge2} alt="bages" width={40} />
        <Image src={Badge3} alt="bages" width={40}/>
        <Image src={Badge4} alt="bages" width={40}/>
        </div> */}
          {/* <Progress className="my-3 h-3 w-full" value={55} /> */}
        </div>

      </div>

      {/* <Image src={Img123} alt="img"/> */}

      <input className="p-1 w-full my-2" placeholder="Search messages..." />

      <div>
        <div>
          <div className=" flex gap-0 font-medium text-white select-none w-fit px-5  pr-10 bg-gradient-to-r from-black to-transparent">
            <div
              className={`cursor-pointer justify-center flex transform skew-x-[45deg] border-r px-2 bg-black/50 backdrop-blur-sm border-purple-900 ${
                activeTab === "people"
                  ? "text-primary font-bold border-b-2 pb-2 border-primary"
                  : ""
              } text-[1.2rem]`}
              onClick={() => handleTabClick("people")}
            >
              <div className="transform -skew-x-[45deg] flex items-center justify-center">
                People
              </div>
            </div>
            <div
              className={`cursor-pointer justify-center flex transform skew-x-[45deg] bg-black/50 backdrop-blur-sm ${
                activeTab === "group"
                  ? "text-primary font-bold border-b-2 pb-2 border-primary"
                  : ""
              } text-[1.2rem]`}
              onClick={() => handleTabClick("group")}
            >
              <div className="transform -skew-x-[45deg] flex items-center justify-center">
                Group
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-[px]" />
        <div className="py-4">
          {tabContent[activeTab] as any}
        </div>
      </div>
    </div>
  );
}

export default UserBar;
