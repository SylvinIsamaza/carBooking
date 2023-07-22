"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

function CustomButton({title,containerStyle,handleClick,btnType,rightIcon,textStyles}:CustomButtonProps) {
  return (
    <button
      disabled={false}
      
      className={`custom-btn ${containerStyle} `}
      onClick={handleClick}
    >
<span className={`flex-1 ${textStyles}`}>
  {title}
</span>
{rightIcon?<div className="relative h-5 w-6">
<Image src={rightIcon} fill className="object-contain" alt="right icon" />
</div>:""}

    </button>
  );
}

export default CustomButton;
