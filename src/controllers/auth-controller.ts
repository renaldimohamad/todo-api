import {Request, Response} from "express"
import * as authServices from "../services/auth-services"
import {IUserRegister} from "../types/auth"
import errorHandler from "../utils/error-handler"

export const login = async (req: Request, res: Response) => {
   try {
      const {email, password} = req.body

      const user = await authServices.login(email, password)

      res.status(200).json({
         token: user,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const register = async (req: Request, res: Response) => {
   try {
      const body = req.body

      const user = await authServices.register(body as IUserRegister)

      res.json({
         message: "User created successfully",
         data: user,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const checkAuth = async (req: Request, res: Response) => {
   try {
      const user = res.locals.user

      res.json({
         id: user.id,
         email: user.email,
         userName: user.userName,
      })
   } catch (error) {
      res.status(500).json({message: "Interval server error"})
   }
}
