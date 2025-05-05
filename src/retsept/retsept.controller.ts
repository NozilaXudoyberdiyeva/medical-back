import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RetseptService } from './retsept.service';
import { CreateRetseptDto } from './dto/create-retsept.dto';
import { UpdateRetseptDto } from './dto/update-retsept.dto';

@Controller('retsept')
export class RetseptController {
  constructor(private readonly retseptService: RetseptService) {}

  @Post()
  create(@Body() createRetseptDto: CreateRetseptDto) {
    return this.retseptService.create(createRetseptDto);
  }

  @Get()
  findAll() {
    return this.retseptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retseptService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetseptDto: UpdateRetseptDto) {
    return this.retseptService.update(id, updateRetseptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retseptService.remove(id);
  }
}
