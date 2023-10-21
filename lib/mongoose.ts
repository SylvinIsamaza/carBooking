import mongoose from "mongoose";

let isConnected = false;
export const connectDb = async () => {
  
  if (!process.env.MONGODB_URL) {
    console.log("Mongodb database not found");
  }
  if (isConnected) {
    console.log("Connected to database");
  }
  try {
    process.env.MONGODB_URL&&await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to mongodb ");
  } catch (error) {
    console.log(error);
  }
};

