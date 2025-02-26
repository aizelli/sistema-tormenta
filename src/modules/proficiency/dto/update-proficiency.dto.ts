import { PartialType } from '@nestjs/mapped-types';
import { CreateProficiencyDto } from './create-proficiency.dto';

export class UpdateProficiencyDto extends PartialType(CreateProficiencyDto) {}
