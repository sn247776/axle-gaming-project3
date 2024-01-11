"use client";
import { Button } from "@/components/ui/button";
import { authValue, isAuth } from "@/redux/global/globalSlice";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuth);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    dispatch(authValue(false));
    toast.success("Logout Successful");
  };
  return (
    <div className="flex justify-between items-center p-3 mx-3">
      <h1>Axle Gaming</h1>
      {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (

        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        
      )}
    </div>
  );
}

export default Header;
