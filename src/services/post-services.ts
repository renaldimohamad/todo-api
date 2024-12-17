import {Posts} from "@prisma/client"
import db from "../libs/db"
import {PostModels} from "../models/post-model"

const posts: PostModels[] = []

export const findAll = async () => {
   return await db.posts.findMany({
      include: {
         author: {
            select: {
               id: true,
               userName: true,
            },
         },
      },
   })
}

export const getAllPostsByUserId = async (userId: number) => {
   if (!userId) {
      throw new Error("UserId is required")
   }

   return await db.posts.findMany({
      where: {
         userId: userId,
      },
   })
}

export const toggleReadStatus = async (id: number) => {
   const existingPost = await db.posts.findFirst({where: {id}})

   if (!existingPost) {
      throw new Error("Post not found")
   }

   const updatePost = await db.posts.update({
      where: {id},
      data: {
         isRead: !existingPost.isRead,
      },
   })

   return updatePost
}

export const findById = async (id: number) => {
   return await db.posts.findFirst({
      where: {id},
      include: {
         author: true,
      },
   })
}

export const create = async (post: Posts) => {
   const newPost = await db.posts.create({data: post})
   return newPost
}

export const update = async (id: number, post: PostModels) => {
   const existingPost = await db.posts.findFirst({where: {id}})

   if (!existingPost) {
      throw new Error("Post not found")
   }

   const updatePost = await db.posts.update({
      data: post,
      where: {id},
   })

   return updatePost
}

export const remove = async (id: number) => {
   await db.posts.delete({where: {id}})

   return "Post deleted"
}
