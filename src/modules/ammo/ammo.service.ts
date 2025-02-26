import { Injectable } from '@nestjs/common';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';

@Injectable()
export class AmmoService {
  create(createAmmoDto: CreateAmmoDto) {
    return 'This action adds a new ammo';
  }

  findAll() {
    return `This action returns all ammo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ammo`;
  }

  update(id: number, updateAmmoDto: UpdateAmmoDto) {
    return `This action updates a #${id} ammo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ammo`;
  }
}
