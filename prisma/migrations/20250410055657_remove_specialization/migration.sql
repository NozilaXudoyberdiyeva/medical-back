/*
  Warnings:

  - You are about to drop the column `specializationId` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the `_doctorTopatient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `retsetpt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_doctorTopatient" DROP CONSTRAINT "_doctorTopatient_A_fkey";

-- DropForeignKey
ALTER TABLE "_doctorTopatient" DROP CONSTRAINT "_doctorTopatient_B_fkey";

-- DropForeignKey
ALTER TABLE "analyze" DROP CONSTRAINT "analyze_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "analyze" DROP CONSTRAINT "analyze_patientId_fkey";

-- DropForeignKey
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_specializationId_fkey";

-- DropForeignKey
ALTER TABLE "retsetpt" DROP CONSTRAINT "retsetpt_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "retsetpt" DROP CONSTRAINT "retsetpt_patientId_fkey";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "specializationId";

-- DropTable
DROP TABLE "_doctorTopatient";

-- DropTable
DROP TABLE "retsetpt";

-- CreateTable
CREATE TABLE "retsept" (
    "id" TEXT NOT NULL,
    "dori" TEXT NOT NULL,
    "necha_mahal" INTEGER NOT NULL,
    "davomiylik" INTEGER NOT NULL,
    "ichish_vaqti" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "retsept_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "retsept_id_key" ON "retsept"("id");
