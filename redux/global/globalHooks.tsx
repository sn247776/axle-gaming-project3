"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authValue } from "./globalSlice";
import React from "react";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
const GlobalHooks = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const pathname = usePathname();



  const notAllowedRedirect = "/signin";
  const notAllowedUrls = ["/profile", "/friends", "/settings"];
  
  // URLs not Allowed after Login
  const notAllowedRedirectLogin = "/store";
  const isNotAllowedLogin = ["/signin", "/signup"];
  
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("authToken");
  //   const isNotAllowed = notAllowedUrls.includes(pathname);
  //   const isLoginNotAllowed = isNotAllowedLogin.includes(pathname);
  
  //   if (!isLoggedIn && isNotAllowed) {
  //     navigate.push(notAllowedRedirect);
  //     toast.error("Access denied. Please login first.");
  //   }
  
  //   if (isLoggedIn && isLoginNotAllowed) {
  //     navigate.push(notAllowedRedirectLogin);
  //     toast.error("Access denied.");
  //   }
  // }, [pathname, navigate]);


  
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      dispatch(authValue(true));
    }
  }, [dispatch]);

  return <></>;
};

export default GlobalHooks;
