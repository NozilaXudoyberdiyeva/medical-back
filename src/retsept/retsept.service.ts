import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRetseptDto } from './dto/create-retsept.dto';
import { UpdateRetseptDto } from './dto/update-retsept.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RetseptService {
  constructor(private prisma: PrismaService) {}

  async create(createRetseptDto: CreateRetseptDto) {
    const retsept = await this.prisma.retsept.create({
      data: createRetseptDto,
    });

    return {
      message: 'Retsept created successfully!',
      retsept,
    };
  }

  async findAll() {
    const retsepts = await this.prisma.retsept.findMany({
      include: {
        doctor: {
          include: {
            specialization: true,
          },
        },
        patient: true,
      },
    });

    return {
      message: 'All retsepts retrieved successfully!',
      retsepts,
    };
  }

  async findOne(id: string) {
    const retsept = await this.prisma.retsept.findUnique({
      where: { id },
      include: {
        doctor: true,
        patient: true,
      },
    });

    if (!retsept) {
      throw new NotFoundException(`Retsept with ID ${id} not found`);
    }

    return {
      message: `Retsept with ID ${id} found`,
      retsept,
    };
  }

  async update(id: string, updateRetseptDto: UpdateRetseptDto) {
    const retsept = await this.prisma.retsept.update({
      where: { id },
      data: updateRetseptDto,
    });

    return {
      message: `Retsept with ID ${id} updated successfully`,
      retsept,
    };
  }

  async remove(id: string) {
    const deleted = await this.prisma.retsept.delete({
      where: { id },
    });

    return { message: `Retsept with ID ${id} deleted successfully`, deleted };
  }
}
