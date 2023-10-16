"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [threshHold, setThreshHold] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setThreshHold(60);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`w-full fixed ${scrollPosition > threshHold ? "bg-white" : ""} mb-16 z-50 `}>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-10 3xl:px-[30%] px-6 py-4'>
          <Link href='/' className='flex items-center justify-center'>
            <Image src='/logo.svg' alt='car hub' width={118} height={18} className='object-contain'/>
          </Link>
          <div className="600px:flex justify-between gap-6 hidden  ">
            <CustomButton title='Get started' btnType='button' containerStyle='rounded-full text-white bg-primary-blue min-w-[130px]' />
            <CustomButton title='Sign in' btnType='button' containerStyle='rounded-full text-primary-blue bg-white min-w-[130px]' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
