import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePowerDto } from './dto/create-power.dto';
import { UpdatePowerDto } from './dto/update-power.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Power } from './entities/power.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PowerService {
  constructor(
    @InjectRepository(Power)
    private powerRepository: Repository<Power>
  ) { }

  async create(createPowerDto: CreatePowerDto): Promise<Power> {
    const power = this.powerRepository.create(createPowerDto);
    return this.powerRepository.save(power);
  }

  async findAll(): Promise<Power[]> {
    return this.powerRepository.find();
  }

  async findOne(id: number): Promise<Power> {
    const power = await this.powerRepository.findOne({
      where: { id },
      relations: ['characters', 'gods'],
    });
    if (!power) {
      throw new NotFoundException(`Power with ID ${id} not found`);
    }
    return power;
  }

  async update(id: number, updatePowerDto: UpdatePowerDto): Promise<Power> {
    await this.powerRepository.update(id, updatePowerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.powerRepository.delete(id);
  }
}