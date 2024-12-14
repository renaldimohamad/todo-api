import {Router} from "express"
import authRoute from "./auth-route"
import todoRoute from "./todo-routes"
import categoryRoute from "./category-routes"
import postRoute from "./post-route"

const router = Router()

router.use("/auth", authRoute)
router.use("/posts", postRoute)
router.use("/todos", todoRoute)
router.use("/categories", categoryRoute)

export default router
