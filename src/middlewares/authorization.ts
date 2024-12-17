import {NextFunction, Request, Response} from "express"
import jwt from "jsonwebtoken"

export default async (req: Request, res: Response, next: NextFunction) => {
   const token = req.headers.authorization?.split(" ")[1]

   if (!token) {
       res.status(401).json({message: "Unauthorized"})
       
       return
   }

   console.log(token)

   const payload = jwt.verify(token, process.env.SECRET_KEY || "secret")

   if (!payload) {
      res.status(401).json({message: "Unauthorized"})
      return
   }

   res.locals.user = payload
   next()
}
