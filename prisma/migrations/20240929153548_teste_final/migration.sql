-- CreateTable
CREATE TABLE "apartments" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "apartments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moradores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "foto_path" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "apartmentId" INTEGER NOT NULL,

    CONSTRAINT "moradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "collaboratorId" INTEGER NOT NULL,
    "moradorId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collaborators" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "countDeliveries" INTEGER NOT NULL,
    "mediaRating" DOUBLE PRECISION NOT NULL,
    "countRating" INTEGER NOT NULL,
    "operatingTime" INTEGER NOT NULL,
    "tags" TEXT NOT NULL,
    "thanksNotes" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "servicesProvided" TEXT NOT NULL,

    CONSTRAINT "collaborators_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "moradores_email_key" ON "moradores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "orders_collaboratorId_key" ON "orders"("collaboratorId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_moradorId_key" ON "orders"("moradorId");

-- AddForeignKey
ALTER TABLE "moradores" ADD CONSTRAINT "moradores_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "apartments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_moradorId_fkey" FOREIGN KEY ("moradorId") REFERENCES "moradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
