import { Injectable } from '@nestjs/common';
import { CreateGodDto } from './dto/create-god.dto';
import { UpdateGodDto } from './dto/update-god.dto';

@Injectable()
export class GodService {
  create(createGodDto: CreateGodDto) {
    return 'This action adds a new god';
  }

  findAll() {
    return `This action returns all god`;
  }

  findOne(id: number) {
    return `This action returns a #${id} god`;
  }

  update(id: number, updateGodDto: UpdateGodDto) {
    return `This action updates a #${id} god`;
  }

  remove(id: number) {
    return `This action removes a #${id} god`;
  }
}
