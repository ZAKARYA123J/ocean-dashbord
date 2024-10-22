-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CONFIRMED', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "Devis" (
    "id" SERIAL NOT NULL,
    "nameEntreprise" TEXT,
    "namePersone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "VotreFonction" TEXT,
    "Adress" TEXT NOT NULL,
    "codePostall" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "etage" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facture" (
    "id" SERIAL NOT NULL,
    "dateReaserver" TIMESTAMP(3) NOT NULL,
    "dateFacture" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "DevisId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surface" (
    "id" SERIAL NOT NULL,
    "valeur" TEXT NOT NULL,
    "DevisId" INTEGER,

    CONSTRAINT "Surface_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facture_DevisId_key" ON "facture"("DevisId");

-- AddForeignKey
ALTER TABLE "facture" ADD CONSTRAINT "facture_DevisId_fkey" FOREIGN KEY ("DevisId") REFERENCES "Devis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surface" ADD CONSTRAINT "Surface_DevisId_fkey" FOREIGN KEY ("DevisId") REFERENCES "Devis"("id") ON DELETE SET NULL ON UPDATE CASCADE;
