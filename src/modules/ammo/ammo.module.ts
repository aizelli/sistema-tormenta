import { Module } from '@nestjs/common';
import { AmmoService } from './ammo.service';
import { AmmoController } from './ammo.controller';

@Module({
  controllers: [AmmoController],
  providers: [AmmoService],
})
export class AmmoModule {}
