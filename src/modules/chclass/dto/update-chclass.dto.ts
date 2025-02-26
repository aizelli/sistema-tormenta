import { PartialType } from '@nestjs/mapped-types';
import { CreateChclassDto } from './create-chclass.dto';

export class UpdateChclassDto extends PartialType(CreateChclassDto) {}
