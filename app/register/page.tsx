
import Register from '@/components/auth/Register'
import SignUpLayout from './layout'
function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-auth">
    <Register/> 
    
    </div>
  )
}
Page.layout=SignUpLayout

export default Page