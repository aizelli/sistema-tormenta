import { Injectable } from '@nestjs/common';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ability } from './entities/ability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AbilityService {

  constructor(
    @InjectRepository(Ability)
    private abilityRepository: Repository<Ability>
  ) { }

  async create(createAbilityDto: CreateAbilityDto): Promise<Ability> {
    return this.abilityRepository.save(createAbilityDto);
  }

  async findAll(): Promise<Ability[]> {
    return await this.abilityRepository.find();
  }

  async findOne(id: number): Promise<Ability | null> {
    return await this.abilityRepository.findOneBy({ id: id });
  }

  async update(id: number, updateAbilityDto: UpdateAbilityDto) {
    await this.abilityRepository.update(id, updateAbilityDto)
    return await this.abilityRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return await this.abilityRepository.delete(id);
  }
}
