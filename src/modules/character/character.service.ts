import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Adventure } from '../adventure/entities/adventure.entity';
import { Armor } from '../armor/entities/armor.entity';
import { Attribute } from '../attribute/entities/attribute.entity';
import { Chclass } from '../chclass/entities/chclass.entity';
import { God } from '../god/entities/god.entity';
import { Magic } from '../magic/entities/magic.entity';
import { Origin } from '../origin/entities/origin.entity';
import { Power } from '../power/entities/power.entity';
import { Proficiency } from '../proficiency/entities/proficiency.entity';
import { Race } from '../race/entities/race.entity';
import { Shild } from '../shild/entities/shild.entity';
import { Skill } from '../skill/entities/skill.entity';
import { Weapon } from '../weapon/entities/weapon.entity';

@Injectable()
export class CharacterService {

  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) { }

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const { skillIds, magicIds, powerIds, proficiencyIds, ...characterData } = createCharacterDto;
    const newCharacter = this.characterRepository.create({
      ...characterData,
      user: { id: createCharacterDto.userId } as User,
      adventure: { id: createCharacterDto.adventureId } as Adventure,
      armor: { id: createCharacterDto.adventureId } as Armor,
      attribute: { id: createCharacterDto.attributeId } as Attribute,
      chClass: { id: createCharacterDto.chClassId } as Chclass,
      god: { id: createCharacterDto.godId } as God,
      origin: { id: createCharacterDto.originId } as Origin,
      race: { id: createCharacterDto.raceId } as Race,
      shild: { id: createCharacterDto.shildId } as Shild,
      weapon: { id: createCharacterDto.weaponId } as Weapon,
    });

    newCharacter.skill = skillIds.map(id => ({ id } as Skill));
    newCharacter.magic = magicIds.map(id => ({ id } as Magic));
    newCharacter.power = powerIds.map(id => ({ id } as Power));
    newCharacter.proficiency = proficiencyIds.map(id => ({ id } as Proficiency));

    return await this.characterRepository.save(newCharacter);
  }

  async findAll(): Promise<Character[]> {
    return await this.characterRepository.find();
  }

  async findByUserId(userId: number): Promise<Character[]> {
    return await this.characterRepository.find({
      where: { user: { id: userId } },
      relations: ["user"]
    });
  }

  async findOne(id: number): Promise<Character | null> {
    return await this.characterRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<Character | null> {
    const { skillIds, proficiencyIds, powerIds, magicIds, ...characterData } = updateCharacterDto;

    const character = await this.characterRepository.findOneBy({ id: id });

    if (!character) {
      throw new Error('Character not found');
    }

    // Atualiza os dados principais
    Object.assign(character, characterData);

    // Atualiza as relações ManyToMany com IDs, se fornecido
    if (skillIds) {
      character.skill = skillIds.map(id => ({ id } as Skill));  // Fazendo cast para Skill
    }
    if (proficiencyIds) {
      character.proficiency = proficiencyIds.map(id => ({ id } as Proficiency));  // Fazendo cast para Proficiency
    }
    if (powerIds) {
      character.power = powerIds.map(id => ({ id } as Power));  // Fazendo cast para Power
    }
    if (magicIds) {
      character.magic = magicIds.map(id => ({ id } as Magic));  // Fazendo cast para Magic
    }

    // Salva o personagem atualizado
    await this.characterRepository.save(character);
    return await this.characterRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return await this.characterRepository.delete(id);
  }
}
