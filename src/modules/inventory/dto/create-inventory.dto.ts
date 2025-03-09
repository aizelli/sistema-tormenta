import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
    @ApiProperty({
        description: 'Nome do inventário',
        example: 'Mochila de Aventuras',
    })
    name: string;
}