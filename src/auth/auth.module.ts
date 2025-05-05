import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/prisma.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'jwt-secret', // .env dan olingan bo‘lishi kerak
      signOptions: { expiresIn: '1d' },
    }),
    CommonModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService],
})
export class AuthModule {}
