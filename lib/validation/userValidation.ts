import { z } from 'zod'

const user = z.object({
  email: z.string().email(),
  password: z.string().regex(/[a-zA-Z]/, "Password must contain atleast one character").regex(/[\d]/, "Password must atleast contain one number").regex(/[!@#$#%^&(){}<>/`~"|?/\\]/, "Password must contain  special character"),
  confirmPassword: z.string()
  
}).refine((values) => {
   return values.email==values.confirmPassword
     , {
     message: "Password does not match",
     path:['confirmPassword']
  }
})
export default user