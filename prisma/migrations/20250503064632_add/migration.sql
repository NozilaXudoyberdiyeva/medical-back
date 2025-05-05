/*
  Warnings:

  - Added the required column `nima_uchun` to the `retsept` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "retsept" ADD COLUMN     "nima_uchun" TEXT NOT NULL;
