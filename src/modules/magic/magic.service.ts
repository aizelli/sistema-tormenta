import { Injectable } from '@nestjs/common';
import { CreateMagicDto } from './dto/create-magic.dto';
import { UpdateMagicDto } from './dto/update-magic.dto';

@Injectable()
export class MagicService {
  create(createMagicDto: CreateMagicDto) {
    return 'This action adds a new magic';
  }

  findAll() {
    return `This action returns all magic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} magic`;
  }

  update(id: number, updateMagicDto: UpdateMagicDto) {
    return `This action updates a #${id} magic`;
  }

  remove(id: number) {
    return `This action removes a #${id} magic`;
  }
}
