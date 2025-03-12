import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryDto } from './create-inventory.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {
    @ApiProperty({
        description: 'IDs dos itens que o inventário possui',
        example: [1, 2, 3],
    })
    itemIds: number; // Array de IDs dos poderes
}
