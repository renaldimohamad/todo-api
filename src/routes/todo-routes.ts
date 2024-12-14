import {Router} from "express"
import * as todoController from "../controllers/todo-controller"
import {todo} from "node:test"

const todoRoute = Router()

todoRoute.get("/", todoController.findAll)
todoRoute.get("/:id", todoController.findById)
todoRoute.post("/", todoController.create)
todoRoute.put("/:id", todoController.update)
todoRoute.delete("/:id", todoController.remove)

export default todoRoute
