import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  async getStats() {
    const doctorCount = await this.prisma.doctor.count();
    const patientCount = await this.prisma.patient.count();
    const specializationCount = await this.prisma.specialization.count();

    return {
      doctorCount,
      patientCount,
      specializationCount,
    };
  }

  async findAll() {
    const admins = await this.prisma.admin.findMany();

    return {
      message: 'All admins retrieved successfully!',
      admins,
    };
  }

  async findOne(id: string) {
    const admin = await this.prisma.admin.findUnique({ where: { id } });

    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }

    return {
      message: `Admin with ID ${id} found`,
      admin,
    };
  }

  async update(id: string, dto: UpdateAdminDto) {
    const data: any = {
      full_name: dto.full_name,
      tel_number: dto.tel_number,
      username: dto.username,
    };

    // Faqat agar password mavjud bo‘lsa, yangilang
    if (dto.password?.trim()) {
      data.password = await bcrypt.hash(dto.password, 10);
    }
    const admin = await this.prisma.admin.update({
      where: { id },
      data: dto,
    });

    return {
      message: `Admin with ID ${id} updated successfully`,
      admin,
    };
  }

  async remove(id: string) {
    const admin = await this.prisma.admin.delete({ where: { id } });

    return {
      message: `Admin with ID ${id} deleted successfully`,
      admin,
    };
  }
}
