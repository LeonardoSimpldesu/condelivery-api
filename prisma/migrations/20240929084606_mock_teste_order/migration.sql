-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "morador" TEXT NOT NULL,
    "colaborador" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
