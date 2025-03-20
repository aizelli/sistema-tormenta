import { Module } from '@nestjs/common';
import { MagicService } from './magic.service';
import { MagicController } from './magic.controller';
import { Magic } from './entities/magic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Magic])],
  controllers: [MagicController],
  providers: [MagicService],
  exports: [TypeOrmModule]
})
export class MagicModule { }
