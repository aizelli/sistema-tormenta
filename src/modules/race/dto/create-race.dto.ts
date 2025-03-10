import { ApiProperty } from '@nestjs/swagger';

export class CreateRaceDto {
    @ApiProperty({
        description: 'Nome da raça',
        example: 'Elfo',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da raça',
        example: 'Os elfos são conhecidos por sua graça e longevidade...',
    })
    description: string;

    @ApiProperty({
        description: 'Atributos da raça (pode ser um objeto com informações adicionais)',
        example: { destreza: +2, inteligencia: +1 },
    })
    attributes: Record<string, any>;

    @ApiProperty({
        description: 'IDs das habilidades que a raça concede',
        example: [1, 2, 3],
    })
    abilityIds: number;
}