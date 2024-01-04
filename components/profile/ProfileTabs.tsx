"use client";

import React, { useState } from 'react';

function ProfileTabs({ProfileData}:any) {
    
  const [activeTab, setActiveTab] = useState('about');

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


  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div >
        <div>
            
        <div className='flex gap-5 font-medium text-white/60 select-none max-w-[50vw] pt-5'>
        <div
          className={`cursor-pointer ${activeTab === 'games' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('games')}
        >
          Game Items
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'achievements' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('achievements')}
        >
          Post
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'factions' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('factions')}
        >
          factions
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'community' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          about
        </div>
      </div>
        </div>
        <hr className='mt-[-2px]'/>
      <div className=' py-4 min-h-[20vh]'>{tabContent[activeTab] as any}</div>
    </div>
  );
}

export default ProfileTabs;
