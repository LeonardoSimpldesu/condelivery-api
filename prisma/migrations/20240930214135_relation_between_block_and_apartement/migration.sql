/*
  Warnings:

  - Added the required column `blockId` to the `apartments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apartments" ADD COLUMN     "blockId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "apartments" ADD CONSTRAINT "apartments_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "blocks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
