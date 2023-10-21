"use server";

import { revalidatePath } from "next/cache";
import user from "../model/user.model";

import { connectDb } from "../mongoose";
import bcrypt from "bcrypt";

import { sign, verify } from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken"
import { userTypes } from "@/types";
import Cookies from "js-cookie";


export async function registerUser({
  email,
  password,
  confirmPassword,
}: userTypes) {
  connectDb();
  try {
    bcrypt
      .hash(password, 10)
      .then(async (hashedPassword) => {
        const newUser = await user.create({ email, password: hashedPassword });
      })
      .catch((error) => ({
        message: "Something went wrong",
      }));
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updateUser({
  id,
  email,
  password,
  username,
  path,
}: userTypes) {
  connectDb();
  try {
    const updateUser = await user.findByIdAndUpdate(id, {
      email,
      password,
      username,
    });

    if (path === "/profile") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function deleteUser(id: string) {
  connectDb();
  await user.findByIdAndDelete(id);
  return {
    message: "User deleted successully",
  };
}

interface loginProps {
  email: string;
  password: string;
}
export async function login({ email, password }: loginProps) {
  connectDb();
  try {
    const jwtSecret = process.env.JWT_SECRET;
    const userToBeLogged = await user.findOne({ email: email });

    if (userToBeLogged) {
      const isCorrect = await bcrypt.compare(password, userToBeLogged.password);
      if (!jwtSecret) {
        throw new Error("No secret provided")
      }
      if (isCorrect) {
        const payload = {
          id: userToBeLogged.id,
          email: userToBeLogged.email,
          image: userToBeLogged.image,
          isBoarded: userToBeLogged.isBoarded,
        };
         const token=sign(payload,jwtSecret)
        return {
          token: token,
          user:userToBeLogged,
          message: "User successfully logged in ",
        };
      } else {
        return { message: "Incorrect email or password" };
      }
    } else {
      return { message: "Incorrect email or password" };
    }
  } catch (error:any) {
    return { message: "Incorrect email or password"+error.message };
  }
}

export const authenticateUser = async (cookie: string | undefined) => {
  connectDb()
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (typeof jwtSecret !== "string") {
      throw new Error("JWT secret is not defined");
    }

    if (!cookie) {
      throw new Error("Login session expired")
    }

    const decodedUser = verify(cookie, jwtSecret) as JwtPayload;
    const savedUser = await user.findById(decodedUser.id);
    return savedUser;
  } catch (error:any) {
    // Handle the error, e.g., log it or return an error response
    console.error("Authentication error:", error);
    throw new Error("Authentication failed"+error.message);
  }
};



export async function logoutUser() {
  try {
    const userToken = Cookies.remove("userToken");
    console.log(userToken)
    return ({ message: "Logged out" })
  } catch (error) {
    throw new Error("Logout failed")
  }

  
}