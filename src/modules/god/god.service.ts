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
    const god = Object.assign(
      {},
      {
        name: updateGodDto.name,
        description: updateGodDto.description,
        beliefsGoals: updateGodDto.beliefsGoals,
        holySymbol: updateGodDto.holySymbol,
        channelEnergy: updateGodDto.channelEnergy,
        favoredWeapon: updateGodDto.favoredWeapon,
        devotees: updateGodDto.devotees,
        dutiesRestrictions: updateGodDto.dutiesRestrictions
      }
    );
    await this.godRepository.update(id, god);
    const powerIds = updateGodDto.powerIds;

    if (powerIds !== undefined) {
      await this.godRepository
        .createQueryBuilder()
        .relation(God, 'powers')
        .of(id)
        .add(powerIds);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.godRepository.delete(id);
  }
}