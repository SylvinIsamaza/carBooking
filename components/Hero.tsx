"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useAuth } from "@/useContext/context";

function Hero() {
  const handleCars = () => {
    const carContainer=document.getElementById("discover")
    carContainer?.scrollIntoView({behavior:"smooth"})
    
  }
  const { user } = useAuth()
  console.log(user)
 
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        {user!=undefined ? <h1 className="hero__subtitle">Welcome back </h1> : ""}
        <h1 className="hero__title">
          Find  car to buy quickly and easily 
        </h1>
        <p className="hero__subtitle">
          Stream line your car renting expericence with our effortless booking
          process
        </p>

        <CustomButton
          title="Explore car"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleCars}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
