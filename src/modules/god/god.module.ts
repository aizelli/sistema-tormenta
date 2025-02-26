import { Module } from '@nestjs/common';
import { GodService } from './god.service';
import { GodController } from './god.controller';
import { God } from './entities/god.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([God])],
  controllers: [GodController],
  providers: [GodService],
})
export class GodModule { }
