import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMagicDto } from './dto/create-magic.dto';
import { UpdateMagicDto } from './dto/update-magic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Magic } from './entities/magic.entity';
import { In, Repository } from 'typeorm';
import { Character } from '../character/entities/character.entity';

@Injectable()
export class MagicService {
  constructor(
    @InjectRepository(Magic)
    private magicRepository: Repository<Magic>,
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) { }

  async create(createMagicDto: CreateMagicDto): Promise<Magic> {
    const magic = this.magicRepository.create(createMagicDto); // Cria a magia sem associar personagens
    return this.magicRepository.save(magic);
  }

  async findAll(): Promise<Magic[]> {
    return this.magicRepository.find({ relations: ['characters'] });
  }

  async findOne(id: number): Promise<Magic> {
    const magic = await this.magicRepository.findOne({
      where: { id },
      relations: ['characters'],
    });
    if (!magic) {
      throw new NotFoundException(`Magic with ID ${id} not found`);
    }
    return magic;
  }

  async update(id: number, updateMagicDto: UpdateMagicDto): Promise<Magic> {
    const { characterIds, ...magicData } = updateMagicDto;
    await this.magicRepository.update(id, magicData);

    // Se houver IDs de personagens, atualiza a associação
    if (characterIds) {
      await this.magicRepository
        .createQueryBuilder()
        .relation(Magic, 'characters')
        .of(id)
        .set(characterIds); // Define os IDs dos personagens diretamente
    } else {
      // Remove a associação com todos os personagens se characterIds for nulo ou vazio
      await this.magicRepository
        .createQueryBuilder()
        .relation(Magic, 'characters')
        .of(id)
        .set([]);
    }

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.magicRepository.delete(id);
  }
}