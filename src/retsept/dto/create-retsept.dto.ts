import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRetseptDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dori: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  necha_mahal: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  davomiylik: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ichish_vaqti: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  doctorId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @ApiProperty()
  @IsString()
  nima_uchun: string;
}
