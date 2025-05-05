import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaModule } from 'src/prisma.module';
import { UserService } from 'src/common/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [AdminController],
  providers: [AdminService, UserService],
})
export class AdminModule {}
