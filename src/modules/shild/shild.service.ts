import { Injectable } from '@nestjs/common';
import { CreateShildDto } from './dto/create-shild.dto';
import { UpdateShildDto } from './dto/update-shild.dto';

@Injectable()
export class ShildService {
  create(createShildDto: CreateShildDto) {
    return 'This action adds a new shild';
  }

  findAll() {
    return `This action returns all shild`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shild`;
  }

  update(id: number, updateShildDto: UpdateShildDto) {
    return `This action updates a #${id} shild`;
  }

  remove(id: number) {
    return `This action removes a #${id} shild`;
  }
}
