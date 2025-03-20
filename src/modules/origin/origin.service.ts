import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOriginDto } from './dto/create-origin.dto';
import { UpdateOriginDto } from './dto/update-origin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Origin } from './entities/origin.entity';
import { Repository } from 'typeorm';
import { Ability } from '../ability/entities/ability.entity'; // Importe a entidade Ability
import { tracingChannel } from 'diagnostics_channel';

@Injectable()
export class OriginService {
  constructor(
    @InjectRepository(Origin)
    private originRepository: Repository<Origin>
  ) { }

  async create(createOriginDto: CreateOriginDto): Promise<Origin> {
    const origin = this.originRepository.create(createOriginDto);
    return this.originRepository.save(origin);
  }

  async findAll(): Promise<Origin[]> {
    return this.originRepository.find({ relations: ['abilities'] }); // Inclua as habilidades na consulta
  }

  async findOne(id: number): Promise<Origin> {
    const origin = await this.originRepository.findOne({
      where: { id },
      relations: ['abilities'], // Inclua as habilidades na consulta
    });
    if (!origin) {
      throw new NotFoundException(`Origin with ID ${id} not found`);
    }
    return origin;
  }

  async update(id: number, updateOriginDto: UpdateOriginDto): Promise<Origin> {
    const origin = Object.assign(
      {},
      {
        name: updateOriginDto.name,
        description: updateOriginDto.description,
        traits: updateOriginDto.traits
      }
    )
    await this.originRepository.update(id, origin);
    const abilityIds = updateOriginDto.abilityIds

    if (abilityIds !== undefined) {
      await this.originRepository
        .createQueryBuilder()
        .relation(Origin, 'abilities')
        .of(id)
        .add(abilityIds);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.originRepository.delete(id);
  }
}