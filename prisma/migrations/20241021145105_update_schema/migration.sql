/*
  Warnings:

  - You are about to drop the column `DevisId` on the `Surface` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Surface" DROP CONSTRAINT "Surface_DevisId_fkey";

-- DropForeignKey
ALTER TABLE "facture" DROP CONSTRAINT "facture_DevisId_fkey";

-- AlterTable
ALTER TABLE "Devis" ADD COLUMN     "surfaceId" INTEGER;

-- AlterTable
ALTER TABLE "Surface" DROP COLUMN "DevisId";

-- AddForeignKey
ALTER TABLE "Devis" ADD CONSTRAINT "Devis_surfaceId_fkey" FOREIGN KEY ("surfaceId") REFERENCES "Surface"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facture" ADD CONSTRAINT "facture_DevisId_fkey" FOREIGN KEY ("DevisId") REFERENCES "Devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
