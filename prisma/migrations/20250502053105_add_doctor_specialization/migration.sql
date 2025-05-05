/*
  Warnings:

  - Added the required column `specializationId` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "specializationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "specialization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
