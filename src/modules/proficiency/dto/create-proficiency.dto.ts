import { ApiProperty } from '@nestjs/swagger';

export class CreateProficiencyDto {
    @ApiProperty({
        description: 'Nome da proficiência',
        example: 'Acrobacia',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição do que a proeficiencia faz',
        example: "Consegue saltar mais alto e mantem o equilibrio",
    })
    description: string;
}