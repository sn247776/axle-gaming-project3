"use client";
import ProfileBar from "@/components/profile/ProfileBar";
import React, { useState } from "react";
import '../../../../components/profile/styles/ProfileTabs.scss'

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent:any = {
    games: (
      <div>Games</div>
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
      <div className="flex gap-5 overflow-y-hidden">
        <div className=" h-[100%]">
        <ProfileBar />
        </div>

        <div className="bg-secondary/50 w-full axle-cut-top relative overflow-y-scroll">
          <div className="profile-banner">
            <img
              src="https://res.cloudinary.com/dd10xtpwd/image/upload/v1701239612/games/fyfhmcefuwgjljh0jtce.jpg"
              alt="profile-banner"
            />
          </div>
          <div>
            <div>
              <div className="absolute top-[347px] ">
                <div className="flex gap-5 font-medium text-white select-none w-[50vw] px-5 pt-4 bg-secondary"
                style={{clipPath:"polygon(0 0, 94% 0, 100% 100%, 100% 100%, 0 99%)"}}
                >
            <div
    className={`cursor-pointer transform skew-x-[45deg] border-r border-purple-900 ${activeTab === 'games' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.3rem] tab`}
    onClick={() => handleTabClick('games')}
  >
    <div className="transform -skew-x-6">Games</div>
  </div>
  <div
    className={`cursor-pointer transform skew-x-6 border-r border-purple-900  ${activeTab === 'achievements' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.3rem] tab`}
    onClick={() => handleTabClick('achievements')}
  >
    <div className="transform -skew-x-6">Post</div>
  </div>
  <div
    className={`cursor-pointer transform skew-x-6 border-r border-purple-900 ${activeTab === 'factions' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.3rem] tab`}
    onClick={() => handleTabClick('factions')}
  >
    <div className="transform -skew-x-6">Factions</div>
  </div>
  <div
    className={`cursor-pointer transform skew-x-6 ${activeTab === 'about' ? 'text-primary font-bold border-b-2 pb-2 border-primary' : ''} text-[1.3rem] tab`}
    onClick={() => handleTabClick('about')}
  >
    <div className="transform -skew-x-6">About</div>
  </div>
  </div>
                </div>
              </div>
              <hr className="mt-[-2px]" />
              <div className=" py-4 min-h-[20vh]">
                {tabContent[activeTab] as any}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
