"use client";
import { login } from "@/lib/actions/user.action";
import { useAuth } from "@/useContext/context";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

function Login() {
  console.log(process.env.MONGODB_URL)
  const{user,loginUser}=useAuth()
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();
    try {
      const data = await login({ email, password });
  
      if (data.token) {
        Cookies.set("userToken", data.token, { expires: 7 });
        loginUser(data.user)
        
        router.push("/");
        
      } else {
        setError(data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error: any) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="600px:w-[60%] w-full max-w-[540px] py-10 rounded-2xl shadow-md bg-white 600px:px-6 px-8">
      <div className="flex items-center justify-center">
        <p className="text-[32px] font-[600] text-gray-600 mb-[25px] ">Login</p>
      </div>
      <form
        className="flex flex-col w-full gap-1"
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
      >
        <div className="flex flex-col gap-2 justify-start ">
          <p className="text-gray-600 font-[600]">Email</p>
          <input
            type="text"
            placeholder="Email"
            className="w-full h-[50px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 justify-start ">
          <p className="text-gray-600  font-[600]">password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50Px] border-[#CACACA] border-[2.3px] rounded-[13px] px-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className=" text-red">{error}</p>
        </div>

        <button
          className="flex items-center justify-center py-4 bg-primary-blue rounded-[13px] text-white font-[800] mb-4 mt-10"
          type="submit"
        >
          Login
        </button>
        <p className="text-center font-bold">or</p>
        <Link
          href="/google"
          className="flex items-center justify-center py-4 bg-[#EE780B] rounded-[13px] text-white font-[800] gap-1 my-4"
        >
          <Image src="/google.png" alt="Google" width={25} height={25} />
          Sign in with Google
        </Link>
        <div className="w-full justify-center items-center flex gap-2 font-[600]">
          Don't have account?{" "}
          <Link href="/register" className="text-primary-blue">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
