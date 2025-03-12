import { PartialType } from '@nestjs/mapped-types';
import { CreateGodDto } from './create-god.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGodDto extends PartialType(CreateGodDto) {
    
    @ApiProperty({
        description: 'IDs dos poderes que o deus concede',
        example: [1, 2, 3],
    })
    powerIds: number; // Array de IDs dos poderes
}
