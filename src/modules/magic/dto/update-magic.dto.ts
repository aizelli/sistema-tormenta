import { PartialType } from '@nestjs/mapped-types';
import { CreateMagicDto } from './create-magic.dto';

export class UpdateMagicDto extends PartialType(CreateMagicDto) {}
