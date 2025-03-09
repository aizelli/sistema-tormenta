import { Module } from '@nestjs/common';
import { AdventureService } from './adventure.service';
import { AdventureController } from './adventure.controller';
import { Adventure } from './entities/adventure.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Adventure, User]),
    UserModule],
  controllers: [AdventureController],
  providers: [AdventureService],
  exports:[TypeOrmModule]
})
export class AdventureModule { }
