import { ApiProperty } from '@nestjs/swagger';

export class CreateAmmoDto {
    @ApiProperty({
        description: 'Nome da munição',
        example: 'Flecha de Madeira',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da munição',
        example: 'Uma flecha simples feita de madeira.',
    })
    description: string;

    @ApiProperty({
        description: 'Preço da munição',
        example: 1.50,
    })
    price: number;

    @ApiProperty({
        description: 'Espaços que a munição ocupa no inventário',
        example: 1,
    })
    slots: number;
}