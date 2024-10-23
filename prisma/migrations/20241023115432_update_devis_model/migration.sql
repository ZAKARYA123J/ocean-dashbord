/*
  Warnings:

  - You are about to drop the column `VotreFonction` on the `Devis` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Devis" DROP COLUMN "VotreFonction",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "ville" TEXT;
