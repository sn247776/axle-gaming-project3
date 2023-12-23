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
    label: "Friends",
    icon: Users,
    color: "text-pink-700",
    href: "/friends",
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
    <div className="storebar-main bg-secondary/50">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
        >
          <div
            className={cn(
              "flex items-center flex-col flex-1",
              pathname === route.href ? "active-bar-link" : "store-bar-link"
            )}
          >
            <route.icon className={cn("h-7 w-7")} />
            <p className="text-[12px] font-bold">{route.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StoreBar;
