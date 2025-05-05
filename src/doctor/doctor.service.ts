import { Injectable } from '@nestjs/common';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from './../prisma.service';
import bcrypt from 'bcrypt';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const doctors = await this.prisma.doctor.findMany({
      include: {
        patient: true,
        specialization: true,
        retsept: {
          include: {
            patient: {
              include: {
                analyze: true,
                retsept: true,
              },
            },
            doctor: {
              include: {
                specialization: true,
              },
            },
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
      },
    });
    return { doctors, message: 'All doctors fetched successfully' };
  }

  async findOne(id: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        patient: {
          include: {
            retsept: true,
            analyze: true,
          },
        },
        specialization: true,
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
      },
    });

    if (!doctor) {
      throw new Error(`Doctor with ID ${id} not found`);
    }

    return { doctor, message: `Doctor with ID ${id} fetched successfully` };
  }

  async update(id: string, dto: UpdateDoctorDto) {
    const { password, ...rest } = dto;
    const data: any = { ...rest };

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    return this.prisma.doctor.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.doctor.delete({
      where: { id },
    });

    return { message: `Doctor with ID ${id} deleted successfully` };
  }
}
