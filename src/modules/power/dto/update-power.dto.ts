import { PartialType } from '@nestjs/mapped-types';
import { CreatePowerDto } from './create-power.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePowerDto extends PartialType(CreatePowerDto) {

}
