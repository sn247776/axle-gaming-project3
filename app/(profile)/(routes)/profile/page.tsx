"use client";
import ProfileBar from "@/components/profile/ProfileBar";
import React, { useState } from "react";
import '../../../../components/profile/styles/ProfileTabs.scss'
import GameTab from "@/components/profile/ProfileTabs/GameTab";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("games");

  const tabContent: any = {
    games: (
      <div>
        <GameTab/>
      </div>
    ),
    achievements: (
      <div>
        Achievements
      </div>
    ),
    factions: (
      <div>
        Factions
      </div>
    ),
    about: (
      <div>About</div>

    ),
  };


  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex gap-5 relative ">
        <div className=" ">
          <ProfileBar />
        </div>

        <div className=" w-full relative ">
          <div className="profile-banner relative axle-cut-top ">
            <img
              src="https://res.cloudinary.com/dd10xtpwd/image/upload/v1701239612/games/fyfhmcefuwgjljh0jtce.jpg"
              alt="profile-banner"
              className=" max-h-[300px]"
            />
            
          </div>
          <div>
            
            <div className="sticky top-[70px] mt-[-38px]">
                <div className="flex gap-0 font-medium text-white select-none w-fit px-5  pr-10 bg-gradient-to-r from-black to-transparent"
                  // style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 100% 100%, 0 100%)" }}
                >
                  <div
                    className={`cursor-pointer w-[7rem] items-center justify-center flex transform skew-x-[45deg] border-r px-1 bg-black/50 backdrop-blur-sm border-purple-900 ${activeTab === 'games' ? 'text-primary  border-b-2 pb-2 border-primary' : ''} text-[1.2rem]`}
                    onClick={() => handleTabClick('games')}
                  >
                    <div className="transform -skew-x-[45deg] flex items-center justify-center">Games</div>
                  </div>
                  <div
                    className={`cursor-pointer w-[7rem] justify-center flex transform skew-x-[45deg] border-r px-2 bg-black/50 backdrop-blur-sm border-purple-900  ${activeTab === 'achievements' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.2rem]`}
                    onClick={() => handleTabClick('achievements')}
                  >
                    <div className="transform -skew-x-[45deg] flex items-center justify-center">Post</div>
                  </div>
                  <div
                    className={`cursor-pointer w-[7rem] justify-center flex transform skew-x-[45deg] border-r px-2 bg-black/50 backdrop-blur-sm border-purple-900 ${activeTab === 'factions' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.2rem]`}
                    onClick={() => handleTabClick('factions')}
                  >
                    <div className="transform -skew-x-[45deg] flex items-center justify-center">Factions</div>
                  </div>
                  <div
                    className={`cursor-pointer w-[7rem] justify-center flex transform skew-x-[45deg] bg-black/50 backdrop-blur-sm ${activeTab === 'about' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.2rem]`}
                    onClick={() => handleTabClick('about')}
                  >
                    <div className="transform -skew-x-[45deg] flex items-center justify-center">About</div>
                  </div>
                </div>
              </div>
            
            <hr className="mt-[px]" />
            <div className="bg-secondary/50 py-4 min-h-[20vh]">
              {tabContent[activeTab] as any}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
