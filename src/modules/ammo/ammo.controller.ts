import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmmoService } from './ammo.service';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';

@Controller('ammo')
export class AmmoController {
  constructor(private readonly ammoService: AmmoService) {}

  @Post()
  create(@Body() createAmmoDto: CreateAmmoDto) {
    return this.ammoService.create(createAmmoDto);
  }

  @Get()
  findAll() {
    return this.ammoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ammoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmmoDto: UpdateAmmoDto) {
    return this.ammoService.update(+id, updateAmmoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ammoService.remove(+id);
  }
}
