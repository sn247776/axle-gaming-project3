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
import { GoogleSignInAction, SignUpAction } from "@/redux/actions/auth";
import toast from "react-hot-toast";
import { authValue } from "@/redux/global/globalSlice";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";

interface SignUpData {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

function Signup() {

  const dispatch = useDispatch();
  const router = useRouter()
  const isLoading = useSelector(AuthLoading);
  const message = useSelector(AuthMessage);
  const error = useSelector(AuthError)

  const [signupData, setSignupData] = useState<SignUpData>({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });


const submitHandler = (e: FormEvent) => {
  e.preventDefault();
  dispatch(SignUpAction(signupData) as any);
};


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setSignupData((prevData) => ({ ...prevData, [name]: value }));
};

  useEffect(() => {
    if (message) {
      router.push('/store')
      dispatch(authValue(true));
      toast.success(message);
      dispatch(AuthclearMessage());
    }

    if (error) {
        toast.error(error);
        dispatch(AuthclearError());
      }
  }, [message,error]);

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
        <Label htmlFor="fullname">Full Name </Label>
        <Input
            placeholder="Full Name"
            type="text"
            name="fullName"
            required
            value={signupData.fullName}
            onChange={handleChange}

          />
           <Label htmlFor="username">User Name </Label>
          <Input
            placeholder="User Name"
            type="text"
            required
            name="userName"
            value={signupData.userName}
            onChange={handleChange}
 
          />

        <Label htmlFor="email">Email </Label>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          required
          value={signupData.email}
          onChange={handleChange}
        />
        <Label htmlFor="password">Password </Label>
        <Input
          placeholder="Password"
          required
          type="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
        />
        {/* <p className="text-sm text-right">Forgot password ?</p> */}
        <Button disabled={isLoading} type="submit" className="my-5">Sigin Up</Button>

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
          Already have an account {" "}
          <Link href={'/login'} className="text-white">Login</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Signup