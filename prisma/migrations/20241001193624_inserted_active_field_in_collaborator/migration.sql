/*
  Warnings:

  - You are about to drop the `Policies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `active` to the `collaborators` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Policies" DROP CONSTRAINT "Policies_condominiumId_fkey";

-- AlterTable
ALTER TABLE "collaborators" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Policies";

-- CreateTable
CREATE TABLE "policies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "condominiumId" INTEGER NOT NULL,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "policies" ADD CONSTRAINT "policies_condominiumId_fkey" FOREIGN KEY ("condominiumId") REFERENCES "condominiuns"("id") ON DELETE CASCADE ON UPDATE CASCADE;
