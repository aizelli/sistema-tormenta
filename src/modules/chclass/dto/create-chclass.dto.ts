import { ApiProperty } from '@nestjs/swagger';

export class CreateChclassDto {
    @ApiProperty({
        description: 'Nome da classe de personagem',
        example: 'Guerreiro',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da classe de personagem',
        example: 'Especialistas em combate...',
    })
    description: string;

    @ApiProperty({
        description: 'Traços da classe (pode ser um objeto com informações adicionais)',
        example: { atributoChave: 'Força', dadosDeVida: 10 },
    })
    traits: Record<string, any>;

    @ApiProperty({
        description: 'IDs das habilidades que a classe possui',
        example: [1, 2, 3],
    })
    abilityIds: number; // Array de IDs das habilidades
}