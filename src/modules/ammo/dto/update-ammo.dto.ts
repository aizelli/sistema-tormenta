import { PartialType } from '@nestjs/mapped-types';
import { CreateAmmoDto } from './create-ammo.dto';

export class UpdateAmmoDto extends PartialType(CreateAmmoDto) {}
