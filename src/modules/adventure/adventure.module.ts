import { Module } from '@nestjs/common';
import { AdventureService } from './adventure.service';
import { AdventureController } from './adventure.controller';
import { Adventure } from './entities/adventure.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Adventure])],
  controllers: [AdventureController],
  providers: [AdventureService],
})
export class AdventureModule { }
