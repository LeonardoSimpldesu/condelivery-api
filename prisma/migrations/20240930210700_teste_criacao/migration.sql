-- CreateTable
CREATE TABLE "blocks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "condominiumId" INTEGER NOT NULL,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_condominiumId_fkey" FOREIGN KEY ("condominiumId") REFERENCES "condominiuns"("id") ON DELETE CASCADE ON UPDATE CASCADE;
