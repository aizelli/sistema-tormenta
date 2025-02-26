import { Injectable } from '@nestjs/common';
import { CreateChclassDto } from './dto/create-chclass.dto';
import { UpdateChclassDto } from './dto/update-chclass.dto';

@Injectable()
export class ChclassService {
  create(createChclassDto: CreateChclassDto) {
    return 'This action adds a new class';
  }

  findAll() {
    return `This action returns all class`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateChclassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
