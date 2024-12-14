import * as todoServices from "../services/todo-services"
import {Request, Response} from "express"

export const findAll = async (req: Request, res: Response) => {
   try {
      const todos = await todoServices.findAll()
      res.json(todos)
   } catch (error) {
      res.status(500).json({message: "Something went wrong"})
   }
}

export const findById = async (req: Request, res: Response) => {
   try {
      const todo = await todoServices.findById(Number(req.params.id))
      if (!todo) {
         res.status(404).json({message: "Todo not found"})
      }

      res.json(todo)
   } catch (error) {
      res.status(500).json({message: "Failed to fetch todo"})
   }
}

export const create = async (req: Request, res: Response) => {
   try {
      const todo = await todoServices.createTodo(req.body)
      res.status(201).json(todo)
   } catch (error) {
      res.status(500).json({message: "Failed to create todo"})
   }
}

export const update = async (req: Request, res: Response) => {
   try {
      const todo = await todoServices.updateTodo(
         Number(req.params.id),
         req.body
      )
      res.json(todo)
   } catch (error) {
      res.status(500).json({message: "Failed to update todo"})
   }
}

export const remove = async (req: Request, res: Response) => {
   try {
      await todoServices.deleteTodo(Number(req.params.id))
   } catch (error) {
      res.status(500).json({message: "Failed to delete todo"})
   }
}
