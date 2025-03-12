import { Module } from '@nestjs/common';
import { AmmoService } from './ammo.service';
import { AmmoController } from './ammo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ammo } from './entities/ammo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ammo])],
  controllers: [AmmoController],
  providers: [AmmoService],
  exports:[TypeOrmModule]
})
export class AmmoModule { }
