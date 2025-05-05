import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { RegisterDoctorDto } from './dto/register-doctor.dto';
import { RegisterPatientDto } from './dto/register-patient.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/common/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.validateUser(dto.username, dto.password);
  }

  @Post('register/admin')
  async registerAdmin(@Body() dto: RegisterAdminDto) {
    await this.userService.checkUsernameUnique(dto.username);
    const password = await bcrypt.hash(dto.password, 10);
    const admin = await this.prisma.admin.create({
      data: { ...dto, password },
    });
    return { message: 'Admin registered', admin };
  }

  @Post('register/doctor')
  async registerDoctor(@Body() dto: RegisterDoctorDto) {
    await this.userService.checkUsernameUnique(dto.username);
    const password = await bcrypt.hash(dto.password, 10);
    const doctor = await this.prisma.doctor.create({
      data: { ...dto, password },
    });
    return { message: 'Doctor registered', doctor };
  }

  @Post('register/patient')
  async registerPatient(@Body() dto: RegisterPatientDto) {
    await this.userService.checkUsernameUnique(dto.username);
    const password = await bcrypt.hash(dto.password, 10);
    const patient = await this.prisma.patient.create({
      data: {
        full_name: dto.full_name,
        tel_number: dto.tel_number,
        username: dto.username,
        password,
        complaint: dto.complaint,
        doctor: {
          connect: dto.doctorIds?.map((id) => ({ id })) || [],
        },
      },
    });
    return { message: 'Patient registered', patient };
  }
}
