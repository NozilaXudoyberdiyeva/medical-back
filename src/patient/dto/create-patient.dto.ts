import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  complaint: string;

  @ApiProperty()
  @IsInt()
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
  @IsArray()
  @IsNotEmpty()
  doctorIds: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  @IsUUID('all', { each: true })
  retseptIds?: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  @IsUUID('all', { each: true })
  analyzeIds?: string[];
}
