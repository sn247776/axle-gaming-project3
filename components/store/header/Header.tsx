"use client";
import { Button } from "@/components/ui/button";
import { isAuth } from "@/redux/global/globalSlice";
import Link from "next/link";
import React from "react";
import {  useSelector } from "react-redux";
import UserMenu from "./UserMenu";

function Header() {
  const isAuthenticated = useSelector(isAuth);
  return (
    <div className="flex justify-between items-center p-3 mx-3">
      <h1>Axle Gaming</h1>
      {isAuthenticated ? (
        <UserMenu />
      ) : (

        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        
      )}
    </div>
  );
}

export default Header;
