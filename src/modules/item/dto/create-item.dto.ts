import { ApiProperty } from '@nestjs/swagger';
import { ItemRole } from '../entities/item.entity';

export class CreateItemDto {
    @ApiProperty({
        description: 'Nome do item',
        example: 'Poção de Cura',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição do item',
        example: 'Uma poção que restaura pontos de vida.',
    })
    description: string;

    @ApiProperty({
        description: 'Preço do item',
        example: 50.00,
    })
    price: number;

    @ApiProperty({
        description: 'Número de espaços que o item ocupa no inventário',
        example: 1,
    })
    slots: number;

    @ApiProperty({
        description: 'Tipo do item',
        enum: ItemRole,
        example: ItemRole.ALCHEMICAL,
    })
    type: ItemRole;
}