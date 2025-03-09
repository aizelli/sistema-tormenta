import { Injectable } from '@nestjs/common';
import { CreateAdventureDto } from './dto/create-adventure.dto';
import { UpdateAdventureDto } from './dto/update-adventure.dto';
import { Adventure } from './entities/adventure.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Character } from '../character/entities/character.entity';

@Injectable()
export class AdventureService {

  constructor(
    @InjectRepository(Adventure)
    private adventureRepository: Repository<Adventure>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createAdventureDto: CreateAdventureDto): Promise<Adventure> {
    return await this.adventureRepository.save(createAdventureDto);
  }

  async findAll(): Promise<Adventure[]> {
    return await this.adventureRepository.find();
  }

  async findOne(id: number): Promise<Adventure | null> {
    return await this.adventureRepository.findOneBy({ id: id });
  }

  async update(id: number, updateAdventureDto: UpdateAdventureDto) {
    await this.adventureRepository.save(updateAdventureDto);
    return this.adventureRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return this.adventureRepository.delete(id);
  }

  async createAdventureWithUser(userId: number, createAdventureDto: CreateAdventureDto): Promise<Adventure> {
    const user = await this.userRepository.findOne({ where: { id: userId }, relations: ["adventure"] });

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    if (user.adventure) {
      throw new Error("Este usuário já possui uma aventura.");
    }

    const adventure = this.adventureRepository.create({
      ...createAdventureDto,
      user: user
    });

    await this.adventureRepository.save(adventure);

    user.adventure = adventure;
    await this.userRepository.save(user);

    return adventure;
  }
}
