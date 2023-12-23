import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import React from "react";

function SmallGrid({ img, title, url }: any) {
  return (
    <AspectRatio ratio={16 / 9} >
        <Link href={`/games`}>
    <div className="relative rounded-md overflow-hidden select-none opacity-90 duration-300 hover:scale-105 hover:opacity-100">
      <img src={img} className="-z-0 w-full" alt="slide"/>
      <p className="absolute text-xl font-semibold bottom-0 flex justify-center w-full bg-secondary/80 p-2">{title}</p>
    </div>
    </Link>
    </AspectRatio>
  );
}

export default SmallGrid;
