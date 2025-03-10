import { ApiProperty } from '@nestjs/swagger';

export class CreateProficiencyDto {
    @ApiProperty({
        description: 'Nome da proficiência',
        example: 'Acrobacia',
    })
    name: string;

    @ApiProperty({
        description: 'IDs dos personagens que possuem a proficiência',
        example: [1, 2, 3],
    })
    characterIds: number;
}