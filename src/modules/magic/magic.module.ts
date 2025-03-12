import { Module } from '@nestjs/common';
import { MagicService } from './magic.service';
import { MagicController } from './magic.controller';
import { Magic } from './entities/magic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from '../character/entities/character.entity';
import { CharacterModule } from '../character/character.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Magic, Character]),
    CharacterModule],
  controllers: [MagicController],
  providers: [MagicService],
  exports: [TypeOrmModule]
})
export class MagicModule { }
