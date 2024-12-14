import {Request, Response} from "express"
import * as categoryServices from "../services/category-services"

export const findAll = async (req: Request, res: Response) => {
   try {
      const categories = await categoryServices.findAll()
      res.json(categories)
   } catch (error) {
      res.status(500).json({message: "Something went wrong"})
   }
}

export const findById = async (req: Request, res: Response) => {
   try {
      const category = await categoryServices.findById(Number(req.params.id))
      if (!category) {
         res.status(404).json({message: "Category not found"})
      }
   } catch (error) {
      res.status(500).json({message: "Failed to fetch category"})
   }
}

export const create = async (req: Request, res: Response) => {
   try {
      const category = await categoryServices.createCategory(req.body)
      res.status(201).json(category)
   } catch (error) {
      res.status(500).json({message: "Something went wrong"})
   }
}

export const update = async (req: Request, res: Response) => {
   try {
      const category = await categoryServices.updateCategory(
         Number(req.params.id),
         req.body
      )
      res.json(category)
   } catch (error) {
      res.status(500).json({message: "Failed to update category"})
   }
}

export const remove = async (req: Request, res: Response) => {
   try {
      await categoryServices.deleteCategory(Number(req.params.id))
      res.status(204).send()
   } catch (error) {
      res.status(500).json({message: "Failed to delete category"})
   }
}
