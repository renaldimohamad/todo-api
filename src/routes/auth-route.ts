import {Router} from "express"
import * as authController from "../controllers/auth-controller"
import authorization from "../middlewares/authorization"

const authRoute = Router()

authRoute.post("/register", authController.register)
authRoute.post("/login", authController.login)

authRoute.get("/me", authorization, authController.checkAuth)

export default authRoute
