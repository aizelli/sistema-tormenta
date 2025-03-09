import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(Attribute)
    private attributeRepository: Repository<Attribute>,
  ) { }

  async create(createAttributeDto: CreateAttributeDto): Promise<Attribute> {
    return this.attributeRepository.save(createAttributeDto);
  }

  async findAll(): Promise<Attribute[]> {
    return this.attributeRepository.find();
  }

  async findOne(id: number): Promise<Attribute> {
    const attribute = await this.attributeRepository.findOneBy({ id });
    if (!attribute) {
      throw new NotFoundException(`Attribute with ID ${id} not found`);
    }
    return attribute;
  }

  async update(id: number, updateAttributeDto: UpdateAttributeDto): Promise<Attribute> {
    await this.attributeRepository.update(id, updateAttributeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.attributeRepository.delete(id);
  }
}