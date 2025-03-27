import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProficiencyDto } from './dto/create-proficiency.dto';
import { UpdateProficiencyDto } from './dto/update-proficiency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proficiency } from './entities/proficiency.entity';
import { In, Repository } from 'typeorm';
import { Character } from '../character/entities/character.entity';

@Injectable()
export class ProficiencyService {
  constructor(
    @InjectRepository(Proficiency)
    private proficiencyRepository: Repository<Proficiency>
  ) { }

  async create(createProficiencyDto: CreateProficiencyDto): Promise<Proficiency> {
    const proficiency = this.proficiencyRepository.create(createProficiencyDto);
    return this.proficiencyRepository.save(proficiency);
  }

  async findAll(): Promise<Proficiency[]> {
    return this.proficiencyRepository.find();
  }

  async findOne(id: number): Promise<Proficiency> {
    const proficiency = await this.proficiencyRepository.findOne({
      where: { id },
      relations: ['characters'],
    });
    if (!proficiency) {
      throw new NotFoundException(`Proficiency with ID ${id} not found`);
    }
    return proficiency;
  }

  async update(id: number, updateProficiencyDto: UpdateProficiencyDto): Promise<Proficiency> {
    await this.proficiencyRepository.update(id, updateProficiencyDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.proficiencyRepository.delete(id);
  }
}