/*
  Warnings:

  - You are about to drop the column `author` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Posts` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "author",
DROP COLUMN "published",
DROP COLUMN "updateAt",
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
