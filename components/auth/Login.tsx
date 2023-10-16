import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <div className="600px:w-[60%] w-full max-w-[540px] py-10 rounded-2xl shadow-md bg-white 600px:px-6 px-8">
      <div className="flex items-center justify-center">
        <p className='text-[32px] font-[600] text-gray-100 mb-[25px] ' >
          Login
        </p>
      </div>
      <div className="flex flex-col w-full gap-1">
      <div className="flex flex-col gap-2 justify-start ">
        <p className='text-gray-100 font-[600]'>Email</p>
        <input type="text" placeholder='Email' className='w-full h-[50px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3' />
      </div>
      <div className="flex flex-col gap-2 justify-start ">
        <p className='text-gray-100  font-[600]'>password</p>
        <input type="password" placeholder='Password' className='w-full h-[50Px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3' />
      </div>

      
        <Link href="/register" className='flex items-center justify-center py-4 bg-primary-blue rounded-[13px] text-white font-[800] mb-4 mt-10'>Login</Link>
        <p className='text-center'>or</p>
        <Link href="/google" className='flex items-center justify-center py-4 bg-[#EE780B] rounded-[13px] text-white font-[800] my-4'>Sign in with Google</Link>
        <div className='w-full justify-center items-center flex gap-2 font-[600]'>Don't have account? <Link href="/register" className='text-primary-blue'>Create account</Link></div>
        
      </div>

    </div>
  )
}

export default Register