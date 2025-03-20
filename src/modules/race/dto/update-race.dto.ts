import { PartialType } from '@nestjs/mapped-types';
import { CreateRaceDto } from './create-race.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRaceDto extends PartialType(CreateRaceDto) {
    @ApiProperty({
        description: 'IDs das habilidades que a raça concede',
        example: [1, 2, 3],
    })
    abilityIds: number;
}
