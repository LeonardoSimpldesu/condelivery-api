-- DropIndex
DROP INDEX "orders_collaboratorId_key";

-- DropIndex
DROP INDEX "orders_residentId_key";

-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "recommendations" DROP NOT NULL;
