import { PartialType } from '@nestjs/mapped-types';
import { CreateRetseptDto } from './create-retsept.dto';

export class UpdateRetseptDto extends PartialType(CreateRetseptDto) {}
