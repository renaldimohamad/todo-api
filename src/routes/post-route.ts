import * as postController from "../controllers/post-controller"
import {Router} from "express"
import authorization from "../middlewares/authorization"

const postRoute = Router()

postRoute.get("/", postController.findAll)
postRoute.get("/:userId", postController.getAllPostsByUserId)
postRoute.put("/:id/toggle-read", postController.toggleReadStatus)
postRoute.get("/:id", postController.findById)
postRoute.post("/", authorization, postController.create)
postRoute.put("/:id", postController.update)
postRoute.delete("/:id", postController.remove)

export default postRoute
