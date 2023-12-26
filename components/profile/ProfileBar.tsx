import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Badge1 from '@/assets/1.png'
import Badge2 from '@/assets/2.png'
import Badge3 from '@/assets/3.png'
import Badge4 from '@/assets/4.png'

function ProfileBar() {
  return (
    <div className="w-[30vw] flex flex-col gap-6 sticky top-[90px]" style={{minHeight:"calc(100vh - 90px)"}}>
      <div className="bg-secondary/50 flex flex-col items-center p-20">

        <div className="relative pb-6">
        <Avatar className="h-60 w-60">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="profile-level">
            45
        </div>
        </div>
        <div className="font-semibold text-white/80">@Sagar247776</div>
        <Progress className="my-3 h-3" value={55} />

        <div className="text-xl font-bold text-white/80">12000 XP / 25600</div>
      </div>
      <div className="bg-secondary/50 min-h-[120px]">

        <div className="flex justify-between items-center h-full px-2 select-none pointer-events-none">
        <Image src={Badge1} alt="bages" width={75}/>
        <Image src={Badge2} alt="bages" width={75}/>
        <Image src={Badge3} alt="bages" width={75}/>
        <Image src={Badge4} alt="bages" width={75}/>
        </div>

      </div>
      <div className="bg-secondary/50 min-h-[120px]"> </div>
    </div>
  );
}

export default ProfileBar;
