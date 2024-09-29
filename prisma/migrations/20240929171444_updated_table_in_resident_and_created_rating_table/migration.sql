/*
  Warnings:

  - You are about to drop the column `nome` on the `collaborators` table. All the data in the column will be lost.
  - You are about to drop the column `operatingTime` on the `collaborators` table. All the data in the column will be lost.
  - You are about to drop the column `thanksNotes` on the `collaborators` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `moradorId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `moradores` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[residentId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `collaborators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operatingTimeInMonths` to the `collaborators` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `residentId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "moradores" DROP CONSTRAINT "moradores_apartmentId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_moradorId_fkey";

-- DropIndex
DROP INDEX "orders_moradorId_key";

-- AlterTable
ALTER TABLE "collaborators" DROP COLUMN "nome",
DROP COLUMN "operatingTime",
DROP COLUMN "thanksNotes",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "operatingTimeInMonths" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "codigo",
DROP COLUMN "moradorId",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "residentId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "moradores";

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "ratingNote" INTEGER NOT NULL,
    "recommendations" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "collaboratorId" INTEGER NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "residents" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo_path" TEXT NOT NULL,
    "apartmentId" INTEGER NOT NULL,

    CONSTRAINT "residents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ratings_orderId_key" ON "ratings"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "residents_email_key" ON "residents"("email");

-- CreateIndex
CREATE UNIQUE INDEX "orders_residentId_key" ON "orders"("residentId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "residents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "residents" ADD CONSTRAINT "residents_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
