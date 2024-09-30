-- CreateTable
CREATE TABLE "condominiuns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "condominiuns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Policies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "condominiumId" INTEGER NOT NULL,

    CONSTRAINT "Policies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Policies" ADD CONSTRAINT "Policies_condominiumId_fkey" FOREIGN KEY ("condominiumId") REFERENCES "condominiuns"("id") ON DELETE CASCADE ON UPDATE CASCADE;
