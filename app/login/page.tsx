"use client"
import Login from '@/components/auth/Login'
import LoginLayout from './layout'
import { useAuth } from '@/useContext/context'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Page() {
  const router=useRouter()
  const { user } = useAuth()
  useEffect(() => {
    user!=undefined?router.back():""
  },[])
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-auth">
    <Login/> 
    
    </div>
  )
}
// Page.layout=LoginLayout

export default Page