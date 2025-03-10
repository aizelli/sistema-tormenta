import { ApiProperty } from '@nestjs/swagger';

export class CreateOriginDto {
    @ApiProperty({
        description: 'Nome da origem',
        example: 'Humano',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da origem',
        example: 'Os humanos são a raça mais comum...',
    })
    description: string;

    @ApiProperty({
        description: 'Traços da origem (pode ser um objeto com informações adicionais)',
        example: { atributoChave: 'Inteligência', tamanho: 'Médio' },
    })
    traits: Record<string, any>;

    @ApiProperty({
        description: 'IDs das habilidades que a origem concede',
        example: [1, 2, 3],
    })
    abilityIds: number; // Array de IDs das habilidades
}