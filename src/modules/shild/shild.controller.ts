import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShildService } from './shild.service';
import { CreateShildDto } from './dto/create-shild.dto';
import { UpdateShildDto } from './dto/update-shild.dto';

@Controller('shild')
export class ShildController {
  constructor(private readonly shildService: ShildService) {}

  @Post()
  create(@Body() createShildDto: CreateShildDto) {
    return this.shildService.create(createShildDto);
  }

  @Get()
  findAll() {
    return this.shildService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shildService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShildDto: UpdateShildDto) {
    return this.shildService.update(+id, updateShildDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shildService.remove(+id);
  }
}
