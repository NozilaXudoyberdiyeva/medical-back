import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { RetseptModule } from './retsept/retsept.module';
import { AnalyzeModule } from './analyze/analyze.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PatientModule,
    DoctorModule,
    SpecialtyModule,
    RetseptModule,
    AnalyzeModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
