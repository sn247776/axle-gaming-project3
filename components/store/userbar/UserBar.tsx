"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Img123 from "@/assets/123.png"

import React, { useState } from "react";

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

      <Image src={Img123} alt="img"/>

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
