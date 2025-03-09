import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdventureModule } from '../adventure/adventure.module';
import { Adventure } from '../adventure/entities/adventure.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character, Adventure],),
    AdventureModule],
  controllers: [CharacterController],
  providers: [CharacterService],
  exports: [TypeOrmModule]
})
export class CharacterModule { }
