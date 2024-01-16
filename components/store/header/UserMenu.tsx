"use client";

import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import toast from "react-hot-toast";
import Link from "next/link";
import { useEffect } from "react";
import { authValue } from "@/redux/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetProfileAction } from "@/redux/actions/profile";
import { ProfileData } from "@/redux/reducer/profileReducer";

function UserMenu() {
  const dispatch = useDispatch();

  const Profile: any = useSelector(ProfileData);


  useEffect(() => {
    dispatch(GetProfileAction as any);
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    dispatch(authValue(false));
    toast.success("Logout Successful");
  };


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger  className="outline-none">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Avatar>
              <AvatarImage src={Profile?.profileImage} />
              <AvatarFallback>{Profile?.fullName[0]}</AvatarFallback>
            </Avatar>
            <p>{Profile?.fullName.split(' ') [0] || "User"}</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="p-2 text-sm">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/profile"} className="flex gap-2">
              <User />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2" onClick={handleLogout}>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserMenu;
