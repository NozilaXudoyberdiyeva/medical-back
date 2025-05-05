-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "complaint" TEXT NOT NULL,
    "tel_number" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "tel_number" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "specializationId" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialization" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "specialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "tel_number" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "retsetpt" (
    "id" TEXT NOT NULL,
    "dori" TEXT NOT NULL,
    "necha_mahal" INTEGER NOT NULL,
    "davomiylik" INTEGER NOT NULL,
    "ichish_vaqti" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "retsetpt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analyze" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "analyze_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_doctorTopatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_doctorTopatient_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_id_key" ON "patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "patient_username_key" ON "patient"("username");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_id_key" ON "doctor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_username_key" ON "doctor"("username");

-- CreateIndex
CREATE UNIQUE INDEX "specialization_id_key" ON "specialization"("id");

-- CreateIndex
CREATE UNIQUE INDEX "specialization_title_key" ON "specialization"("title");

-- CreateIndex
CREATE UNIQUE INDEX "admin_id_key" ON "admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "retsetpt_id_key" ON "retsetpt"("id");

-- CreateIndex
CREATE UNIQUE INDEX "analyze_id_key" ON "analyze"("id");

-- CreateIndex
CREATE INDEX "_doctorTopatient_B_index" ON "_doctorTopatient"("B");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "specialization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retsetpt" ADD CONSTRAINT "retsetpt_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retsetpt" ADD CONSTRAINT "retsetpt_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analyze" ADD CONSTRAINT "analyze_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analyze" ADD CONSTRAINT "analyze_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_A_fkey" FOREIGN KEY ("A") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
