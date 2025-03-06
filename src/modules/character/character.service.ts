import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterService {

  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) { }

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const character = this.characterRepository.create(createCharacterDto);
    return await this.characterRepository.save(character);
  }

  async findAll(): Promise<Character[]> {
    return await this.characterRepository.find();
  }

  async findByUserId(userId: number):Promise<Character[]>{
    return await this.characterRepository.find({
      where: {user:{id: userId}},
      relations:["user"]
    });
  }

  async findOne(id: number): Promise<Character | null> {
    return await this.characterRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<Character | null> {
    await this.characterRepository.update(id, updateCharacterDto);
    return await this.characterRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return await this.characterRepository.delete(id);
  }
}
