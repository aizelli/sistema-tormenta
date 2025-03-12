import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponController } from './weapon.controller';
import { Weapon } from './entities/weapon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ammo } from '../ammo/entities/ammo.entity';
import { AmmoModule } from '../ammo/ammo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Weapon, Ammo]),
  AmmoModule],
  controllers: [WeaponController],
  providers: [WeaponService],
})
export class WeaponModule { }
