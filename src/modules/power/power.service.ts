import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePowerDto } from './dto/create-power.dto';
import { UpdatePowerDto } from './dto/update-power.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Power } from './entities/power.entity';
import { In, Repository } from 'typeorm';
import { Character } from '../character/entities/character.entity';
import { God } from '../god/entities/god.entity';

@Injectable()
export class PowerService {
  constructor(
    @InjectRepository(Power)
    private powerRepository: Repository<Power>,
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
    @InjectRepository(God)
    private godRepository: Repository<God>,
  ) { }

  async create(createPowerDto: CreatePowerDto): Promise<Power> {
    const power = this.powerRepository.create(createPowerDto);
    return this.powerRepository.save(power);
  }

  async findAll(): Promise<Power[]> {
    return this.powerRepository.find({ relations: ['characters', 'gods'] });
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
    const { characterIds, godId, ...powerData } = updatePowerDto;
    await this.powerRepository.update(id, powerData);

    if (characterIds) {
      await this.powerRepository
        .createQueryBuilder()
        .relation(Power, 'characters')
        .of(id)
        .set(characterIds);
    }

    if (godId !== undefined) { // Verifica se godId foi fornecido no DTO
      if (godId) {
        await this.powerRepository
          .createQueryBuilder()
          .relation(Power, 'gods')
          .of(id)
          .set(godId);
      } else {
        await this.powerRepository
          .createQueryBuilder()
          .relation(Power, 'gods')
          .of(id)
          .set(null); // Define como null se godId for explicitamente null
      }
    }

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.powerRepository.delete(id);
  }
}