import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Weapon } from './entities/weapon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeaponService {
  constructor(
    @InjectRepository(Weapon)
    private weaponRepository: Repository<Weapon>
  ) { }

  async create(createWeaponDto: CreateWeaponDto): Promise<Weapon> {
    const weapon = this.weaponRepository.create(createWeaponDto);
    return this.weaponRepository.save(weapon);
  }

  async findAll(): Promise<Weapon[]> {
    return this.weaponRepository.find({ relations: ['ammo'] });
  }

  async findOne(id: number): Promise<Weapon> {
    const weapon = await this.weaponRepository.findOne({
      where: { id },
      relations: ['ammo'],
    });
    if (!weapon) {
      throw new NotFoundException(`Weapon with ID ${id} not found`);
    }
    return weapon;
  }

  async update(id: number, updateWeaponDto: UpdateWeaponDto): Promise<Weapon> {
    await this.weaponRepository.update(id, updateWeaponDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.weaponRepository.delete(id);
  }
}