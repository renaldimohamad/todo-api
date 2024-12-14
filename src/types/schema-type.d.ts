export interface ITodo {
   id: number
   title: string
   description?: string
   status: boolean
   priority: number
   createAt: Date
   updateAt: Date
   userId?: number
   categoryId?: number
}

export interface ICategory {
   id: number
   name: string
}
