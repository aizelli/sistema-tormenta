import { Module } from '@nestjs/common';
import { ShildService } from './shild.service';
import { ShildController } from './shild.controller';
import { Shild } from './entities/shild.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shild])],
  controllers: [ShildController],
  providers: [ShildService],
})
export class ShildModule { }
