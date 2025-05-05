-- CreateTable
CREATE TABLE "_doctorTopatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_doctorTopatient_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_doctorTopatient_B_index" ON "_doctorTopatient"("B");

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_A_fkey" FOREIGN KEY ("A") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
