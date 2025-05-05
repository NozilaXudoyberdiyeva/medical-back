import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnalyzeDto } from './dto/create-analyze.dto';
import { UpdateAnalyzeDto } from './dto/update-analyze.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnalyzeService {
  constructor(private prisma: PrismaService) {}

  async create(createAnalyzeDto: CreateAnalyzeDto) {
    const analyze = await this.prisma.analyze.create({
      data: createAnalyzeDto,
    });

    return {
      message: 'Analyze created successfully!',
      analyze,
    };
  }

  async findAll() {
    const analyzes = await this.prisma.analyze.findMany({
      include: {
        patient: true,
        doctor: {
          include: {
            specialization: true,
          },
        },
      },
    });

    return {
      message: 'All analyzes retrieved successfully!',
      analyzes,
    };
  }

  async findOne(id: string) {
    const analyze = await this.prisma.analyze.findUnique({
      where: { id },
      include: {
        patient: true,
        doctor: {
          include: {
            specialization: true,
          },
        },
      },
    });

    if (!analyze) {
      throw new NotFoundException(`Analyze with ID ${id} not found`);
    }

    return {
      message: `Analyze with ID ${id} found`,
      analyze,
    };
  }

  async update(id: string, updateAnalyzeDto: UpdateAnalyzeDto) {
    const analyze = await this.prisma.analyze.update({
      where: { id },
      data: updateAnalyzeDto,
    });

    return {
      message: `Analyze with ID ${id} updated successfully`,
      analyze,
    };
  }

  async remove(id: string) {
    const analyze = await this.prisma.analyze.delete({
      where: { id },
    });

    return {
      message: `Analyze with ID ${id} deleted successfully`,
      analyze,
    };
  }
}
