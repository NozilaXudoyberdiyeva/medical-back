import { Injectable } from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { PrismaService } from './../prisma.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
export class SpecialtyService {
  constructor(private prisma: PrismaService) {}

  create(CreateSpecialtyDto: CreateSpecialtyDto) {
    return this.prisma.specialization.create({ data: CreateSpecialtyDto });
  }

  findAll() {
    return this.prisma.specialization.findMany();
  }

  findOne(id: string) {
    return this.prisma.specialization.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateSpecialtyDto) {
    return this.prisma.specialization.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    // 1. Specialization mavjudmi?
    const specialization = await this.prisma.specialization.findUnique({
      where: { id },
      include: {
        doctor: true, // doctor bilan bog‘liqmi?
      },
    });

    if (!specialization) {
      throw new NotFoundException(`Specialization with ID ${id} not found`);
    }

    // 2. Bog‘langan doctorlar borligini tekshirish
    if (specialization.doctor.length > 0) {
      throw new BadRequestException(
        `Cannot delete specialization "${specialization.title}" because it is assigned to ${specialization.doctor.length} doctor(s)`,
      );
    }

    // 3. O‘chirish
    return await this.prisma.specialization.delete({
      where: { id },
    });
  }
}
