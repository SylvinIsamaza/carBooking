import { decodedUser} from "@/types";
import { createContext, useContext } from "react";
interface userContextProps{
  user: decodedUser|undefined,
  loginUser: (userData: decodedUser) => void,
  logout:()=>void
}
let initialUser = {
  user: undefined,
  loginUser: (userData: decodedUser) => { },
  logout:()=>{}
}

export const userContext = createContext<userContextProps>(initialUser)
export function useAuth(){
  return useContext(userContext)
}