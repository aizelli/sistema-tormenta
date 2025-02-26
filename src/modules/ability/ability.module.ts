import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { AbilityController } from './ability.controller';
import { Ability } from './entities/ability.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ability])],
  controllers: [AbilityController],
  providers: [AbilityService],
  exports: [AbilityService]
})
export class AbilityModule { }
