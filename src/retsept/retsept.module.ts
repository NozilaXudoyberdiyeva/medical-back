import { Module } from '@nestjs/common';
import { RetseptService } from './retsept.service';
import { RetseptController } from './retsept.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RetseptController],
  providers: [RetseptService],
})
export class RetseptModule {}
