
import Login from '@/components/auth/Login'
import LoginLayout from './layout'
function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-auth">
    <Login/> 
    
    </div>
  )
}
Page.layout=LoginLayout

export default Page