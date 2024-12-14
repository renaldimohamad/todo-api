import db from "../libs/db"
import {ICategory} from "../types/schema-type"

export const findAll = async () => {
   return await db.category.findMany()
}

export const findById = async (id: number) => {
   return await db.category.findUnique({where: {id}})
}

export const createCategory = async (data: ICategory) => {
   return await db.category.create({data})
}

export const updateCategory = async (id: number, data: ICategory) => {
   return await db.category.update({
      where: {id},
      data,
   })
}

export const deleteCategory = async (id: number) => {
   return await db.category.delete({where: {id}})
}
