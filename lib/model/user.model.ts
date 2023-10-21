import mongoose from "mongoose";


const userModel=new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required:true
  },
  fullName: {
    type:String
  },
  image: {
    type:String
  },
  onBoarded: {
    type: Boolean,
    default:false
  }
})
const user = mongoose.models.user || mongoose.model("user", userModel)
export default user