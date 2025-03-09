import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChclassDto } from './dto/create-chclass.dto';
import { UpdateChclassDto } from './dto/update-chclass.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chclass } from './entities/chclass.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChclassService {
  constructor(
    @InjectRepository(Chclass)
    private chclassRepository: Repository<Chclass>,
  ) { }

  async create(createChclassDto: CreateChclassDto): Promise<Chclass> {
    return this.chclassRepository.save(createChclassDto);
  }

  async findAll(): Promise<Chclass[]> {
    return this.chclassRepository.find();
  }

  async findOne(id: number): Promise<Chclass> {
    const chclass = await this.chclassRepository.findOneBy({ id });
    if (!chclass) {
      throw new NotFoundException(`Chclass with ID ${id} not found`);
    }
    return chclass;
  }

  async update(id: number, updateChclassDto: UpdateChclassDto): Promise<Chclass> {
    await this.chclassRepository.update(id, updateChclassDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.chclassRepository.delete(id);
  }
}