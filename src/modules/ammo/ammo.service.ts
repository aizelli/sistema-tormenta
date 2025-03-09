import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAmmoDto } from './dto/create-ammo.dto';
import { UpdateAmmoDto } from './dto/update-ammo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ammo } from './entities/ammo.entity'; // Certifique-se de importar a entidade correta
import { Repository } from 'typeorm';

@Injectable()
export class AmmoService {
  constructor(
    @InjectRepository(Ammo)
    private ammoRepository: Repository<Ammo>,
  ) { }

  async create(createAmmoDto: CreateAmmoDto): Promise<Ammo> {
    return this.ammoRepository.save(createAmmoDto);
  }

  async findAll(): Promise<Ammo[]> {
    return this.ammoRepository.find();
  }

  async findOne(id: number): Promise<Ammo | null> {
    const ammo = await this.ammoRepository.findOneBy({ id });
    if (!ammo) {
      throw new NotFoundException(`Ammo with ID ${id} not found`);
    }
    return ammo;
  }

  async update(id: number, updateAmmoDto: UpdateAmmoDto): Promise<Ammo | null> {
    await this.ammoRepository.update(id, updateAmmoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ammoRepository.delete(id);
  }
}