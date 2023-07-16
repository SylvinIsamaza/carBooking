import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

function Navbar() {
  return (
    <header>
      <div className='w-full absolute z-10'>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
          <Link href='/' className='flex items-center justify-center'>
            <Image src='/logo.svg' alt='car hub' width={118} height={18} className='object-contain'/>
          </Link>
          <CustomButton title='Sign in' btnType='button' containerStyle='rounded-full text-primary-blue bg-white min-w-[130px]'/>
        </div>
      </div>
    </header>
  )
}

export default Navbar