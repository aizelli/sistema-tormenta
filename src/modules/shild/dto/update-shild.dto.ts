import { PartialType } from '@nestjs/mapped-types';
import { CreateShildDto } from './create-shild.dto';

export class UpdateShildDto extends PartialType(CreateShildDto) {}
