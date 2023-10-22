"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import { useAuth } from '@/useContext/context';
import { logoutUser } from '@/lib/actions/user.action';
import { useRouter } from 'next/navigation';
import Menu from './Menu';



function Navbar({open,setOpen}:{open:boolean,setOpen:(value:boolean)=>void}) {
  const {user,logout}=useAuth()
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
  const handleCars = () => {
    const carContainer=document.getElementById("discover")
    carContainer?.scrollIntoView({behavior:"smooth"})
    
  }
  const router=useRouter()
  const handleLogout = () => {
    console.log("logging out user")
    try {
      logout()
      return router.replace("/login")
    } catch (error) {
      throw new Error("Logou failed")
    }

    
  }
 
  return (
    <header>
      <div className={`w-full fixed ${scrollPosition > threshHold ? "bg-white" : ""} mb-16 z-20`}>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-10 3xl:px-[30%] px-6 py-4'>
          <Link href='/' className='flex items-center justify-center'>
            <Image src='/logo.svg' alt='car hub' width={118} height={18} className='object-contain'/>
          </Link>
          {user == undefined ? <div className="600px:flex  justify-between gap-2 hidden  ">
            <CustomButton title='Cars' url='/cars' btnType='link' containerStyle='rounded-full font-[600]bg-white' />
            <CustomButton title='Sign in' btnType='link' containerStyle=' font-[600] text-primary-blue' url="/login"/>
            <CustomButton title='Get started' btnType='link' containerStyle='rounded-full text-white bg-primary-blue min-w-[130px]' url="/register"/>
          </div> : <div className="600px:flex justify-between gap-4 hidden  ">
            
            <CustomButton title='Cars' btnType='link' url='/cars' containerStyle='rounded-full font-[600]bg-white' />
            <div className=" flex items-center justify-center" onClick={()=>setOpen(!open)}>
              <Image
                src={user?.image ? user.image : "/profile.png"}
                alt="profile"
                width={50}
                height={50}
              />
            </div>
     
          </div>}
          <Menu handleLogout={handleLogout} />
          
 
        </div>
      </div>
    </header>
  );
}

export default Navbar;

