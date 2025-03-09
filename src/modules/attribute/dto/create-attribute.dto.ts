import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeDto {
    @ApiProperty({
        description: 'Nome do atributo',
        example: 'Atributos de Força',
    })
    name: string;

    @ApiProperty({
        description: 'Valor da força',
        example: 15,
    })
    strength: number;

    @ApiProperty({
        description: 'Valor da destreza',
        example: 12,
    })
    dexterity: number;

    @ApiProperty({
        description: 'Valor da constituição',
        example: 14,
    })
    constitution: number;

    @ApiProperty({
        description: 'Valor da inteligência',
        example: 10,
    })
    intelligence: number;

    @ApiProperty({
        description: 'Valor da sabedoria',
        example: 8,
    })
    wisdom: number;

    @ApiProperty({
        description: 'Valor do carisma',
        example: 16,
    })
    charisma: number;

    @ApiProperty({
        description: 'ID do personagem ao qual o atributo pertence',
        example: 1,
    })
    characterId: number; // Assumindo que o ID do personagem é um número
}