import { ApiProperty } from "@nestjs/swagger";

export class CreateAbilityDto {
    @ApiProperty({
            description: 'Nome da habilidade',
            example: 'nome',
        })
        name: string;
}
