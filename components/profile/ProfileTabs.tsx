"use client";

import React, { useState } from 'react';

function ProfileTabs({ProfileData}:any) {
    
  const [activeTab, setActiveTab] = useState('about');

  const tabContent:any = {
    about: (
      <div>About</div>
    ),
    stats: (
      <div>
        Stats
      </div>
    ),
    friends: (
      <div>
        Friends
      </div>
    ),
    community: (
      <div>Community</div>
        
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
          className={`cursor-pointer ${activeTab === 'about' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          Game Items
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'stats' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('stats')}
        >
          Post
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'friends' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('friends')}
        >
          Awards
        </div>
        <div
          className={`cursor-pointer ${activeTab === 'community' ? 'text-primary border-b-2 pb-2 border-primary' : ''}`}
          onClick={() => handleTabClick('community')}
        >
          Badges
        </div>
      </div>
        </div>
        <hr className='mt-[-2px]'/>
      <div className=' py-4 min-h-[20vh]'>{tabContent[activeTab] as any}</div>
    </div>
  );
}

export default ProfileTabs;
