import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MagicService } from './magic.service';
import { CreateMagicDto } from './dto/create-magic.dto';
import { UpdateMagicDto } from './dto/update-magic.dto';

@Controller('magic')
export class MagicController {
  constructor(private readonly magicService: MagicService) {}

  @Post()
  create(@Body() createMagicDto: CreateMagicDto) {
    return this.magicService.create(createMagicDto);
  }

  @Get()
  findAll() {
    return this.magicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMagicDto: UpdateMagicDto) {
    return this.magicService.update(+id, updateMagicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magicService.remove(+id);
  }
}
