import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { PrismaModule } from 'src/prisma.module';
import { UserService } from 'src/common/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [DoctorController],
  providers: [DoctorService, UserService],
})
export class DoctorModule {}
