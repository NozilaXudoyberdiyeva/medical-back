import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const admin = await this.prisma.admin.findUnique({ where: { username } });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      return {
        access_token: this.jwtService.sign({
          sub: admin.id,
          role: 'admin',
          full_name: admin.full_name,
          username: admin.username,
        }),
        message: 'Login successful!',
      };
    }

    const doctor = await this.prisma.doctor.findUnique({ where: { username } });
    if (doctor && (await bcrypt.compare(password, doctor.password))) {
      return {
        access_token: this.jwtService.sign({
          sub: doctor.id,
          role: 'doctor',
          full_name: doctor.full_name,
          username: doctor.username,
        }),
        message: 'Login successful',
      };
    }

    const patient = await this.prisma.patient.findUnique({
      where: { username },
    });
    if (patient && (await bcrypt.compare(password, patient.password))) {
      return {
        access_token: this.jwtService.sign({
          sub: patient.id,
          role: 'patient',
          full_name: patient.full_name,
          username: patient.username,
        }),
        message: 'Login successful',
      };
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}
