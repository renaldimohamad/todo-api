import {createPostSchema} from "../libs/validations/post"
import * as postServices from "../services/post-services"
import {Request, Response} from "express"
import errorHandler from "../utils/error-handler"

export const findAll = async (req: Request, res: Response) => {
   const posts = await postServices.findAll()

   res.json(posts)
}

export const getAllPostsByUserId = async (req: Request, res: Response) => {
   const {userId} = req.params

   try {
      const posts = await postServices.getAllPostsByUserId(parseInt(userId, 10))
      console.log("🚀 ~ getAllPostsByUserId ~ posts:", posts)

       res.json(posts)
   } catch (error) {
      console.error(error)
      errorHandler(res, error as unknown as Error)
   }
}

export const toggleReadStatus = async (req: Request, res: Response) => {
   const {id} = req.params

   try {
      const updatedPost = await postServices.toggleReadStatus(Number(id))
      res.status(200).json(updatedPost)
    
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const findById = async (req: Request, res: Response) => {
   const posts = await postServices.findById(parseInt(req.params.id))

   res.json(posts)
}

export const create = async (req: Request, res: Response) => {
   try {
      await createPostSchema.validateAsync(req.body)

      const userId = res.locals.user.id
      req.body.userId = userId

      const post = await postServices.create(req.body)
      res.json({
         message: "Post created successfully",
         data: post,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const update = (req: Request, res: Response) => {
   const posts = postServices.update(parseInt(req.params.id), req.body)

   res.json(posts)
}

export const remove = (req: Request, res: Response) => {
   const posts = postServices.remove(parseInt(req.params.id))

   res.json(posts)
}
