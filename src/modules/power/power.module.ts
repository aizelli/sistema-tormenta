import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerController } from './power.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([PowerModule])],
  controllers: [PowerController],
  providers: [PowerService],
})
export class PowerModule { }
