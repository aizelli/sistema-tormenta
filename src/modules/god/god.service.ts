import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGodDto } from './dto/create-god.dto';
import { UpdateGodDto } from './dto/update-god.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { God } from './entities/god.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GodService {
  constructor(
    @InjectRepository(God)
    private godRepository: Repository<God>,
  ) { }

  async create(createGodDto: CreateGodDto): Promise<God> {
    const god = this.godRepository.create(createGodDto);
    return this.godRepository.save(god);
  }

  async findAll(): Promise<God[]> {
    return this.godRepository.find();
  }

  async findOne(id: number): Promise<God> {
    const god = await this.godRepository.findOneBy({ id });
    if (!god) {
      throw new NotFoundException(`God with ID ${id} not found`);
    }
    return god;
  }

  async update(id: number, updateGodDto: UpdateGodDto): Promise<God> {
    await this.godRepository.update(id, updateGodDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.godRepository.delete(id);
  }
}