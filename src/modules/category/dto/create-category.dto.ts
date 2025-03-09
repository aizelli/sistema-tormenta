import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
    @ApiProperty({
        description: 'Nome da categoria',
        example: 'Armas',
    })
    name: string;
}