import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChclassService } from './chclass.service';
import { CreateChclassDto } from './dto/create-chclass.dto';
import { UpdateChclassDto } from './dto/update-chclass.dto';

@Controller('class')
export class ChclassController {
  constructor(private readonly chclassService: ChclassService) {}

  @Post()
  create(@Body() createChclassDto: CreateChclassDto) {
    return this.chclassService.create(createChclassDto);
  }

  @Get()
  findAll() {
    return this.chclassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chclassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChclassDto: UpdateChclassDto) {
    return this.chclassService.update(+id, updateChclassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chclassService.remove(+id);
  }
}
