import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PrismaModule } from 'src/prisma.module';
import { UserService } from 'src/common/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [PatientController],
  providers: [PatientService, UserService],
})
export class PatientModule {}
