import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChclassDto } from './dto/create-chclass.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chclass } from './entities/chclass.entity';
import { Repository, In } from 'typeorm';
import { UpdateChclassDto } from './dto/update-chclass.dto';

@Injectable()
export class ChclassService {
  constructor(
    @InjectRepository(Chclass)
    private chclassRepository: Repository<Chclass>
  ) { }

  async create(createChclassDto: CreateChclassDto): Promise<Chclass> {
    return this.chclassRepository.save(createChclassDto);
  }

  async findAll(): Promise<Chclass[]> {
    return this.chclassRepository.find({ relations: ['abilities'] }); // Inclua 'abilities' nas relações
  }

  async findOne(id: number): Promise<Chclass> {
    const chclass = await this.chclassRepository.findOne({
      where: { id },
      relations: ['abilities'], // Inclua 'abilities' nas relações
    });
    if (!chclass) {
      throw new NotFoundException(`Chclass with ID ${id} not found`);
    }
    return chclass;
  }

  async update(id: number, updateChclassDto: Partial<UpdateChclassDto>): Promise<Chclass> {
    const chclass = Object.assign(
      {},
      {
        name: updateChclassDto.name,
        description: updateChclassDto.description,
        traits: updateChclassDto.traits
      });
    await this.chclassRepository.update(id, chclass);
    const abilityIds = updateChclassDto.abilityIds;

    if (abilityIds !== undefined) {
      await this.chclassRepository
        .createQueryBuilder()
        .relation(Chclass, 'abilities')
        .of(id)
        .add(abilityIds);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.chclassRepository.delete(id);
  }
}