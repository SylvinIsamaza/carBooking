"use client"

import { registerUser } from '@/lib/actions/user.action'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    registerUser({email:email,password:password,confirmPassword:confirmPassword})
  }

  return (
    <div className="600px:w-[60%] w-full max-w-[540px] 600px:h-fit h-screen py-10 rounded-2xl shadow-sm bg-white 600px:px-6 px-8">
      <div className="flex items-center justify-center">
        <p className='text-[32px] font-[600] text-gray-600 mb-[25px] ' >
          Sign up
        </p>
      </div>
      <form className="flex flex-col w-full gap-1 " onSubmit={(e:React.FormEvent)=>handleSubmit(e)}>
      <div className="flex flex-col gap-2 justify-start ">
        <p className='text-gray-600 font-[600]'>Email</p>
        <input type="text" placeholder='Email' className='w-full h-[50px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3' onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2 justify-start ">
        <p className='text-gray-600  font-[600]'>password</p>
        <input type="password" placeholder='Password' className='w-full h-[50Px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3' onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2 justify-start ">
        <p className='text-gray-600  font-[600]'>Confirm password</p>
        <input type="password" placeholder='Confirm password' className='w-full h-[50Px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3' onChange={(e)=>setConfirmPassword(e.target.value)} />
        </div>
      
        <button  className='flex items-center justify-center py-4 bg-primary-blue rounded-[13px] text-white font-[800] mb-4 mt-10'>Register</button>
        <p className='text-center font-bold'>or</p>
        <Link href="/google" className='flex items-center gap-1 justify-center py-4 bg-[#EE780B] rounded-[13px] text-white font-[800] my-4'>
          <Image src="/google.png" alt='Google' width={25} height={25}/>
          Sign in with Google</Link>
        <div className='w-full justify-center items-center flex gap-2 font-[600]'>Already have account <Link href="/login" className='text-primary-blue'>Login</Link></div>
        
      </form>

    </div>
  )
}

export default Register