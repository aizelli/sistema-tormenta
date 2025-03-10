import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShildDto } from './dto/create-shild.dto';
import { UpdateShildDto } from './dto/update-shild.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shild } from './entities/shild.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShildService {
  constructor(
    @InjectRepository(Shild)
    private shildRepository: Repository<Shild>,
  ) { }

  async create(createShildDto: CreateShildDto): Promise<Shild> {
    return this.shildRepository.save(createShildDto);
  }

  async findAll(): Promise<Shild[]> {
    return this.shildRepository.find();
  }

  async findOne(id: number): Promise<Shild> {
    const shild = await this.shildRepository.findOneBy({ id });
    if (!shild) {
      throw new NotFoundException(`Shild with ID ${id} not found`);
    }
    return shild;
  }

  async update(id: number, updateShildDto: UpdateShildDto): Promise<Shild> {
    await this.shildRepository.update(id, updateShildDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.shildRepository.delete(id);
  }
}