import { ApiProperty } from '@nestjs/swagger';

export class CreateArmorDto {
    @ApiProperty({
        description: 'Nome da armadura',
        example: 'Cota de Malha',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da armadura',
        example: 'Uma armadura de malha de aço resistente.',
    })
    description: string;

    @ApiProperty({
        description: 'Valor de defesa da armadura',
        example: 15,
    })
    defence: number;

    @ApiProperty({
        description: 'Preço da armadura',
        example: 150.50,
    })
    price: number;

    @ApiProperty({
        description: 'Espaços que a armadura ocupa no inventário',
        example: 4,
    })
    slots: number;

    @ApiProperty({
        description: 'Tipo da armadura (pode ser um objeto com informações adicionais)',
        example: { tipo: 'pesada', material: 'aço' },
    })
    type: Record<string, any>;

    @ApiProperty({
        description: 'Habilidades especiais da armadura (pode ser um objeto com informações adicionais)',
        example: { resistenciaFogo: true, penalidade: -2 },
    })
    ability: Record<string, any>;
}