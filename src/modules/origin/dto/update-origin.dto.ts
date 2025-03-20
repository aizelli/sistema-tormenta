import { PartialType } from '@nestjs/mapped-types';
import { CreateOriginDto } from './create-origin.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOriginDto extends PartialType(CreateOriginDto) {
    @ApiProperty({
        description: 'IDs das habilidades que a origem concede',
        example: [1, 2, 3],
    })
    abilityIds: number; // Array de IDs das habilidades
}
