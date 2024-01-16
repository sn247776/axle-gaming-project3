"use client";
import { cn } from "@/lib/utils";
import { Gamepad2, Home, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/StoreBar.scss"

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
    label: "Community",
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
    <div className="sticky size-fit left-2 top-[35%] gap-[5rem]  ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`flex items-center justify-center flex-col flex-1 h-[5rem] w-[3rem] mb-1 -skew-y-12 bg-secondary/50 backdrop-blur-sm   ${pathname === route.href ? "active-bar-link" : "store-bar-link"}`}
        >
          <div className={` flex items-center justify-center flex-col skew-y-12`}>
            <route.icon className={cn("h-7 w-7")} />
            <p className="text-[.65rem] font-bold">{route.label}</p>
          </div>
        </Link>
      ))}
      {/* <div className={` absolute  h-[90%] w-[50%] border-2 border-blue-500 -top-[10%] -z-10 `}/> */}
    </div>
  );
}

export default StoreBar;
