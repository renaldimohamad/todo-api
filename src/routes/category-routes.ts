import * as categoryController from "../controllers/category-controller"
import {Router} from "express"

const categoryRoute = Router()

categoryRoute.get("/", categoryController.findAll)
categoryRoute.get("/:id", categoryController.findById)
categoryRoute.post("/", categoryController.create)
categoryRoute.put("/:id", categoryController.update)
categoryRoute.delete("/:id", categoryController.remove)

export default categoryRoute
