import { Module } from '@nestjs/common';
import { ChclassService } from './chclass.service';
import { ChclassController } from './chclass.controller';
import { Chclass } from './entities/chclass.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chclass])],
  controllers: [ChclassController],
  providers: [ChclassService],
})
export class ChclassModule { }
