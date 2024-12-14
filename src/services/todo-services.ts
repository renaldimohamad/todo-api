import db from "../libs/db"
import {ITodo} from "../types/schema-type"

export const findAll = async () => {
   return await db.todo.findMany()
}

export const findById = async (id: number) => {
   return await db.todo.findUnique({where: {id}})
}

export const createTodo = async (data: ITodo) => {
   return await db.todo.create({
      data,
   })
}

export const updateTodo = async (id: number, data: ITodo) => {
   return await db.todo.update({
      where: {id},
      data,
   })
}

export const deleteTodo = async (id: number) => {
   return await db.todo.delete({
      where: {id},
   })
}
