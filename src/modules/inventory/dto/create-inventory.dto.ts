import { ApiProperty } from '@nestjs/swagger';
import { Character } from 'src/modules/character/entities/character.entity';

export class CreateInventoryDto {
    @ApiProperty({
        description: 'Id do personagem que o invetário pertence',
        example: 1,
    })
    character: Character;
}