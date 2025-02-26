import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GodService } from './god.service';
import { CreateGodDto } from './dto/create-god.dto';
import { UpdateGodDto } from './dto/update-god.dto';

@Controller('god')
export class GodController {
  constructor(private readonly godService: GodService) {}

  @Post()
  create(@Body() createGodDto: CreateGodDto) {
    return this.godService.create(createGodDto);
  }

  @Get()
  findAll() {
    return this.godService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.godService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGodDto: UpdateGodDto) {
    return this.godService.update(+id, updateGodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.godService.remove(+id);
  }
}
