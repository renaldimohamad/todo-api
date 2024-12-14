import {User} from "@prisma/client"
import db from "../libs/db"
import {IUserRegister} from "../types/auth"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import ERROR from "../utils/constans/ERROR_LIST"

export const login = async (email: string, password: string) => {
   const existUser = await db.user.findFirst({
      where: {
         email: email,
      },
   })

   if (!existUser) {
      throw new Error(ERROR.AUTH_NOT_FOUND)
   }

   const isMatch = await bcrypt.compare(password, existUser.password)

   if (!isMatch) {
      throw new Error(ERROR.AUTH_NOT_FOUND)
   }

   const tokent = jwt.sign(existUser, process.env.SECRET_KEY || "secret", {
      expiresIn: "1d",
   })

   return tokent
}

export const register = async (user: IUserRegister): Promise<User | string> => {
   const existUser = await db.user.findFirst({
      where: {
         OR: [
            {
               email: user.email,
               userName: user.userName,
            },
         ],
      },
   })

   if (existUser) {
      throw new Error("User already exist")
   }

   const hashedPassword = await bcrypt.hash(user.password, 10)
   user.password = hashedPassword

   const newUser = await db.user.create({
      data: user,
   })
   return newUser
}
