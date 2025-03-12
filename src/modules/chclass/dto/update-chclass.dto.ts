import { PartialType } from '@nestjs/mapped-types';
import { CreateChclassDto } from './create-chclass.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateChclassDto extends PartialType(CreateChclassDto) {
    @ApiProperty({
        description: 'Definição das habilidades que a classe possui',
        example: [1,2,3],
    })
     abilityIds: number[];
}
