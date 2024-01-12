"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Img123 from "@/assets/123.png";
import Badge1 from "@/assets/1.png";
import Badge2 from "@/assets/2.png";
import Badge3 from "@/assets/3.png";
import Badge4 from "@/assets/4.png";
import { PeopleData } from "@/dummy/PeopleData";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import ExpBar from "@/utilities/expBar";
function UserBar() {
  const [isBarCollapsed, setIsBarCollapsed] = useState(false);
  const [isMessageBar, setIsMessageBar] = useState(false);
  const [activeTab, setActiveTab] = useState("people");

  const tabContent: any = {
    people: (
      <div>
        {PeopleData.map((person) => (
          <div
          onClick={() => setIsMessageBar(true)}
            key={person.id}
            className="flex gap-2 items-center border-b p-2 hover:bg-secondary/50 cursor-pointer"
          >
            <Avatar className="w-10 h-10">
              <AvatarImage src={person.image} />
              <AvatarFallback>{person.name[0]}</AvatarFallback>
            </Avatar>

            <div>
              <p>{person.name}</p>
              <p className="text-xs font-semibold">{person?.username}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    group: <div>group</div>,
    chat: <div>chat</div>,
  };

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const toggleColaps = () => {  
    setIsBarCollapsed((prevColaps) => !prevColaps);
  };

  return (
    <div
      // style={{ width: isBarCollapsed ? "55px" : "300px" }}
      className={
        ` ${isBarCollapsed ? ' w-[3.4375rem] ':' w-[18.75rem] '} h-[90%] flex flex-col justify-between sticky top-[4rem] right-[1%] bg-secondary/50 backdrop-blur-sm duration-200 `
      }
    >
      {/* <div className="flex justify-around items-center p-2 bg-secondary border-b-2 border-white/50">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className="text-xl">Messaging</h4>
      </div> */}

      <div className="p-2 bg-secondary/50 w-full flex flex-col">
        <div className={`absolute z-20 text-white text-2xl p-2 flex self-end cursor-pointer size-fit rounded-full transition-all ease-in-out duration-500 ${!isBarCollapsed  ? ` bg-slate-500 right-1 ` : `  ` } `} >
        <HiMenuAlt3 onClick={toggleColaps} />
        </div>

   
        <div className={`${isBarCollapsed ? '':' '} relative w-full `}>
          <img
            className={`${isBarCollapsed ? 'hidden':' '} transition-all duration-500 ease-in`}
            src="https://res.cloudinary.com/dd10xtpwd/image/upload/v1701239612/games/fyfhmcefuwgjljh0jtce.jpg"
            alt="cover"
          />
          <div className={` flex w-full justify-end items-end`}>
          <div className={` ${isBarCollapsed ? 'top-0 -left-[5px]':' bottom-[] left-2 '}  w-fit h-fit items-center absolute flex flex-col`}>
          <div className={`  w-fit h-fit bg-secondary/80 p-1 rounded-full transition-all ease-in-out delay-300 duration-400`}>
            <Avatar className="  w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className={` ${isBarCollapsed ? ' ':' px-1'} mt-1 text-sm w-fit  font-semibold bg-[#35283d] rounded-lg text-center justify-center flex`}>Lvl 100</div>
          </div>
          <div className={` ${isBarCollapsed ? ' hidden ':' '} flex flex-col w-full `}>
          <div className=" text-[.6rem] ml-auto mr-0 float-end text-white">12000 XP / 25600</div>
          <div className={` \ mt-1  w-[9rem] mb-1 -mr-1 ml-auto justify-center flex items-center`}>
            <ExpBar percent={45} />
          </div>
          </div>
          </div>
          
        </div>
      

        <div className="flex items-center flex-col gap-3">
         
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


      <div>

        {!isBarCollapsed ? (<div>
          <input className="p-1 w-full my-2" placeholder="Search messages..." />
          <div className=" relative flex gap-0 font-medium text-white select-none w-fit px-5  pr-10 bg-gradient-to-r from-black to-transparent">
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
        </div>):null}
        

        <hr className="mt-[px]" />
        <div className="py-4 overflow-scroll h-[55vh]">
          {tabContent[activeTab] as any}
        </div>


        {
          isMessageBar ? (<div id="msg-container" className=" absolute bottom-0 z-20 right-[105%] duration-200 bg-green-500 ">
          <div className="relative w-[500px] h-[600px] rounded p-4">
            <div className="absolute bottom-0 w-full right-0 px-4">
              <textarea
                rows={3}
                placeholder="write your message"
                className="w-full p-2"
              />
            </div>

            <div>
              <div className=" flex justify-between border-b p-1">

                <div className="flex gap-2 items-center">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={""} />
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <div>
                  <p>Sagar Nirwal</p>
                  <p className="text-xs font-semibold">sn247776</p>
                </div>
                </div>

            

                <div className="text-3xl cursor-pointer" onClick={() => setIsMessageBar(false)}><MdClose  /></div>
              </div>

              <div className="h-[435px] overflow-scroll">

                Messages

                </div>
            </div>
          </div>
        </div>):null
        }

        
      </div>
    </div>
  );
}

export default UserBar;
