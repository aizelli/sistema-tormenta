import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArmorDto } from './dto/create-armor.dto';
import { UpdateArmorDto } from './dto/update-armor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Armor } from './entities/armor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArmorService {
  constructor(
    @InjectRepository(Armor)
    private armorRepository: Repository<Armor>,
  ) { }

  async create(createArmorDto: CreateArmorDto): Promise<Armor> {
    return this.armorRepository.save(createArmorDto);
  }

  async findAll(): Promise<Armor[]> {
    return this.armorRepository.find();
  }

  async findOne(id: number): Promise<Armor> {
    const armor = await this.armorRepository.findOneBy({ id });
    if (!armor) {
      throw new NotFoundException(`Armor with ID ${id} not found`);
    }
    return armor;
  }

  async update(id: number, updateArmorDto: UpdateArmorDto): Promise<Armor> {
    await this.armorRepository.update(id, updateArmorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.armorRepository.delete(id);
  }
}