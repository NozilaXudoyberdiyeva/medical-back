import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateDoctorDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  tel_number: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  specializationId: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  patientIds?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  retseptIds?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  analyzeIds?: string[];
}
