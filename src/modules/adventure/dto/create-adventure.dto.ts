import { ApiProperty } from "@nestjs/swagger";

export class CreateAdventureDto {
    @ApiProperty({
            description: 'Nome da aventura',
            example: 'Em busca da verdade',
        })
        name: string;
    
        @ApiProperty({
            description: 'Descrição da aventura',
            example: 'No inicio tudo que ele queria era a vingança, mas ...',
        })
        description: string;

        @ApiProperty({
            description: 'Id do usuário que a aventura se refere',
            example: 1,
        })
        userId: Number;
}
