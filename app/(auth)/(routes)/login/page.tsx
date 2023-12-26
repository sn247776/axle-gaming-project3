import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthIMG from '@/assets/AuthIMG.jpg'
import React from 'react'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
function LoginPage() {
  return (
    <div className='grid' style={{gridTemplateColumns:"2fr 1fr"}}>
      <div className='ml-20'>
        <Image src={AuthIMG} className=' w-[60vw] h-[100vh] object-cover object-left select-none' alt='auth-img'/>
      </div>


      <div className='flex justify-center items-center'>
        

        <div className='w-[350px] flex flex-col gap-3'>
        <h2 className='text-3xl font-medium my-20 text-center'>WELCOME BACK!</h2>
          <Label htmlFor="email">Email </Label>
          <Input type='email' placeholder='Email'/>
          <Label htmlFor="password">Password </Label>
          <Input type='password' placeholder='Password'/>
          <p className='text-sm text-right'>Forgot password ?</p>
          <Button className='my-5'>Login</Button>

          <div className='flex gap-3 items-center justify-center text-white/60'>
            <div className='w-[100px] border'></div>
            <h4 className='text-2xl'>or</h4>
            <div className='w-[100px] border'></div>
          </div>

          <div className=' items-center flex justify-center gap-5 border-primary border p-3 text-primary text-sm'><FcGoogle className="text-2xl" /> <p>Login with Google</p></div>

          <p className='text-center text-sm text-white/60'>If you dont have account please <a className='text-white'>Sing Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage