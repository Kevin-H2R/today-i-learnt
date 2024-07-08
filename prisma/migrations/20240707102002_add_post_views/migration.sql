/*
  Warnings:

  - Added the required column `postId` to the `PostView` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostView" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PostView" ADD CONSTRAINT "PostView_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
