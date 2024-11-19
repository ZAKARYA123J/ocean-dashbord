-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CONFIRMED', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devis" (
    "id" SERIAL NOT NULL,
    "nameEntreprise" TEXT,
    "namePersone" TEXT NOT NULL,
    "numberPhon" TEXT,
    "datecalendrier" TEXT,
    "ville" TEXT,
    "email" TEXT NOT NULL,
    "VotreFonction" TEXT,
    "Adress" TEXT NOT NULL,
    "codePostall" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "etage" TEXT NOT NULL,
    "surfaceId" INTEGER,
    "status" "Status",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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

    CONSTRAINT "Surface_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "facture_DevisId_key" ON "facture"("DevisId");

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_surfaceId_fkey" FOREIGN KEY ("surfaceId") REFERENCES "Surface"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facture" ADD CONSTRAINT "facture_DevisId_fkey" FOREIGN KEY ("DevisId") REFERENCES "Devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
