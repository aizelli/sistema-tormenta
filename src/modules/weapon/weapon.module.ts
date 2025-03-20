import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponController } from './weapon.controller';
import { Weapon } from './entities/weapon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Weapon])],
  controllers: [WeaponController],
  providers: [WeaponService],
})
export class WeaponModule { }
