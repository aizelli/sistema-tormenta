import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Race } from './entities/race.entity';
import { In, Repository } from 'typeorm';
import { Ability } from '../ability/entities/ability.entity';

@Injectable()
export class RaceService {
  constructor(
    @InjectRepository(Race)
    private raceRepository: Repository<Race>,
    @InjectRepository(Ability)
    private abilityRepository: Repository<Ability>,
  ) { }

  async create(createRaceDto: CreateRaceDto): Promise<Race> {
    const race = this.raceRepository.create(createRaceDto);
    return this.raceRepository.save(race);
  }

  async findAll(): Promise<Race[]> {
    return this.raceRepository.find({ relations: ['abilities'] });
  }

  async findOne(id: number): Promise<Race> {
    const race = await this.raceRepository.findOne({
      where: { id },
      relations: ['abilities'],
    });
    if (!race) {
      throw new NotFoundException(`Race with ID ${id} not found`);
    }
    return race;
  }

  async update(id: number, updateRaceDto: UpdateRaceDto): Promise<Race> {
    const { abilityIds, ...raceData } = updateRaceDto;
    await this.raceRepository.update(id, raceData);

    if (abilityIds) {
      await this.raceRepository
        .createQueryBuilder()
        .relation(Race, 'abilities')
        .of(id)
        .set(abilityIds);
    } else {
      await this.raceRepository
        .createQueryBuilder()
        .relation(Race, 'abilities')
        .of(id)
        .set([]);
    }

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.raceRepository.delete(id);
  }
}