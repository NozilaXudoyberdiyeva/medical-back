import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async checkUsernameUnique(username: string) {
    const doctor = await this.prisma.doctor.findUnique({ where: { username } });
    const patient = await this.prisma.patient.findUnique({
      where: { username },
    });
    const admin = await this.prisma.admin.findUnique({ where: { username } });

    if (doctor || patient || admin) {
      throw new BadRequestException(`Username "${username}" is already taken`);
    }
  }
}
