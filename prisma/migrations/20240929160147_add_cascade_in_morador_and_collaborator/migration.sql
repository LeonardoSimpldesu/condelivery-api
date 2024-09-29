-- DropForeignKey
ALTER TABLE "moradores" DROP CONSTRAINT "moradores_apartmentId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_collaboratorId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_moradorId_fkey";

-- AddForeignKey
ALTER TABLE "moradores" ADD CONSTRAINT "moradores_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "collaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "moradores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
