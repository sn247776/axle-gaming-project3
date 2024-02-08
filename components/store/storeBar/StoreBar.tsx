"use client";
import { cn } from "@/lib/utils";
import { Gamepad2, Home, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.scss"
const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/store",
    color: "text-sky-500",
  },
  {
    label: "Games",
    icon: Gamepad2,
    href: "/games",
    color: "text-violet-500",
  },
  {
    label: "Faction",
    icon: Users,
    color: "text-pink-700",
    href: "/community",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/settings",
  },
];

function StoreBar() {
  const pathname = usePathname();

  return (
    <div className="sticky size-fit left-2 top-[20vh]  ind  py-2">
      <span/>
      {routes.map((route,index) => (
        <Link
          id={`a${index+1}`}
          style={{ WebkitClipPath:'polygon(35% 0, 100% 20%, 100% 90%, 65% 100%, 0 80%, 0 10%)'}}
          key={route.href}
          href={route.href}
          className={`flex mt-[.1rem] items-center justify-center flex-col flex-1 h-[7rem] w-[2.8rem] bg-secondary/50 backdrop-blur-sm `}
        >
          
          
          <div className={` flex items-center justify-center flex-col ${pathname === route.href ? "active-bar-link" : "store-bar-link"} `}>
            <route.icon className={cn("h-7 w-7")} />
            <p className="text-[.65rem] font-bold">{route.label}</p>
          </div>
        </Link>
      ))}
      <div className={` indicator `}></div>
      {/* <div className={` absolute  h-[90%] w-[50%] border-2 border-blue-500 -top-[10%] -z-10 `}/> */}
    </div>
  );
}

export default StoreBar;
