import { ApiProperty } from '@nestjs/swagger';

export class CreateShildDto {
    @ApiProperty({
        description: 'Nome do escudo',
        example: 'Escudo de Madeira',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição do escudo',
        example: 'Um escudo de madeira resistente.',
    })
    description: string;

    @ApiProperty({
        description: 'Valor de defesa do escudo',
        example: 2,
    })
    defence: number;

    @ApiProperty({
        description: 'Preço do escudo',
        example: 10.50,
    })
    price: number;

    @ApiProperty({
        description: 'Número de slots que o escudo ocupa',
        example: 1,
    })
    slots: number;

    @ApiProperty({
        description: 'Tipo do escudo (objeto com informações adicionais)',
        example: { material: 'madeira', tamanho: 'médio' },
    })
    type: Record<string, any>;

    @ApiProperty({
        description: 'Habilidades do escudo (objeto com informações adicionais)',
        example: { resistencia: 'fogo' },
    })
    ability: Record<string, any>;
}