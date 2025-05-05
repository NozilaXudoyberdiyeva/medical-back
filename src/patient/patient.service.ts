import { Injectable } from '@nestjs/common';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma.service';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Patient> {
    const patients = await this.prisma.patient.findMany({
      include: {
        doctor: {
          include: {
            specialization: true,
          },
        },
        analyze: {
          include: {
            patient: true,
            doctor: {
              include: {
                specialization: true,
              },
            },
          },
        },
        retsept: {
          include: {
            patient: true,
            doctor: {
              include: {
                specialization: true,
              },
            },
          },
        },
      },
    });
    return { patients, message: 'Get all patients!' };
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.prisma.patient.findUnique({
      where: { id },
      include: {
        doctor: {
          include: {
            specialization: true,
          },
        },
        analyze: {
          include: {
            patient: true,
            doctor: {
              include: {
                specialization: true,
              },
            },
          },
        },
        retsept: {
          include: {
            patient: true,
            doctor: {
              include: {
                specialization: true,
              },
            },
          },
        },
      },
    });
    return { patient, message: 'Get this patient' };
  }

  async update(id: string, dto: UpdatePatientDto) {
    return this.prisma.patient.update({
      where: { id },
      data: {
        full_name: dto.full_name,
        tel_number: dto.tel_number,
        username: dto.username,
        password: dto.password,
        complaint: dto.complaint,
        ...(dto.doctorIds && {
          doctor: {
            set: dto.doctorIds.map((id) => ({ id })),
          },
        }),
      },
    });
  }

  async remove(id: string): Promise<Patient> {
    const deletedPatient = await this.prisma.patient.delete({
      where: { id },
    });
    return { deletedPatient, message: 'Deleted patient!' };
  }
}
