"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthIMG from "@/assets/AuthIMG.jpg";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthError,
  AuthLoading,
  AuthMessage,
  AuthclearError,
  AuthclearMessage,
} from "@/redux/reducer/authReducer";
import { GoogleSignInAction, SignInAction } from "@/redux/actions/auth";
import toast from "react-hot-toast";
import { authValue } from "@/redux/global/globalSlice";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import './style.scss'

interface SignInData {
  email: string;
  password: string;
}

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector(AuthLoading);
  const message = useSelector(AuthMessage);
  const error = useSelector(AuthError);

  const [signinData, setSigninData] = useState<SignInData>({
    email: "",
    password: "",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(SignInAction(signinData) as any);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (message) {
      router.push("/store");
      toast.success(message);
      dispatch(authValue(true));
      dispatch(AuthclearMessage());
    }

    if (error) {
      toast.error(error);
      dispatch(AuthclearError());
    }
  }, [message, error]);

  return (
    <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
      <div className="ml-20">
        <Image
          src={AuthIMG}
          className=" w-[60vw] h-[100vh] object-cover object-left select-none"
          alt="auth-img"
        />
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="w-[350px] flex flex-col gap-3"
        >
          <h2 className="text-3xl font-medium my-20 text-center">
            WELCOME BACK!
          </h2>
          <Label htmlFor="email">Email </Label>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            required
            value={signinData.email}
            onChange={handleChange}
          />
          <Label htmlFor="password">Password </Label>
          <Input
            placeholder="Password"
            required
            type="password"
            name="password"
            value={signinData.password}
            onChange={handleChange}
          />
          <p className="text-sm text-right">Forgot password ?</p>
          {/* <Button disabled={isLoading} type="submit" className="my-5">Login</Button> */}
          <button disabled={isLoading} className="kave-btn" type="submit">
            <span className="kave-line"></span>
            Login
          </button>

          <div className="flex gap-3 items-center justify-center text-white/60">
            <div className="w-[100px] border"></div>
            <h4 className="text-2xl">or</h4>
            <div className="w-[100px] border"></div>
          </div>
          <div>
            <div className="flex justify-center">
              <GoogleLogin
                width={300}
                onSuccess={async (credentialResponse) => {
                  console.log(credentialResponse);
                  dispatch(GoogleSignInAction(credentialResponse) as any);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>

          {/* <div className=' items-center flex justify-center gap-5 border-primary border p-3 text-primary text-sm'><FcGoogle className="text-2xl" /> <p>Login with Google</p></div> */}

          <p className="text-center text-sm text-white/60">
            If you dont have account please{" "}
            <Link href={'/signup'} className="text-white">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
