"use client";
import ProfileBar from "@/components/profile/ProfileBar";
import React, { useState } from "react";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent: any = {
    about: <div>About</div>,
    stats: <div>Stats</div>,
    friends: <div>Friends</div>,
    community: <div>Community</div>,
  };

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex gap-5">
        <ProfileBar />

        <div className="bg-secondary/50 w-full axle-cut-top relative">
          <div className="profile-banner">
            <img
              src="https://res.cloudinary.com/dd10xtpwd/image/upload/v1701239612/games/fyfhmcefuwgjljh0jtce.jpg"
              alt="profile-banner"
            />
          </div>
          <div>
            <div>
              <div className="absolute top-[347px] ">
                <div className="flex gap-5 font-medium text-white select-none w-[50vw] px-5 pt-5 bg-secondary"
                style={{clipPath:"polygon(0 0, 94% 0, 100% 100%, 100% 100%, 0 99%)"}}
                >
                  <div
                    className={`cursor-pointer ${
                      activeTab === "about"
                        ? "text-primary border-b-2 pb-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleTabClick("about")}
                  >
                    Game Items
                  </div>
                  <div
                    className={`cursor-pointer ${
                      activeTab === "stats"
                        ? "text-primary border-b-2 pb-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleTabClick("stats")}
                  >
                    Post
                  </div>
                  <div
                    className={`cursor-pointer ${
                      activeTab === "friends"
                        ? "text-primary border-b-2 pb-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleTabClick("friends")}
                  >
                    Awards
                  </div>
                  <div
                    className={`cursor-pointer ${
                      activeTab === "community"
                        ? "text-primary border-b-2 pb-2 border-primary"
                        : ""
                    }`}
                    onClick={() => handleTabClick("community")}
                  >
                    Badges
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
    </div>
  );
}

export default ProfilePage;
