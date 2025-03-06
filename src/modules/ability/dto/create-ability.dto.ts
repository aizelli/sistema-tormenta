import { ApiProperty } from "@nestjs/swagger";
import { AbilityRole } from "../entities/ability.entity";

export class CreateAbilityDto {
    @ApiProperty({
        description: 'Nome da habilidade',
        example: 'Conhecimento das rochas',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da habilidade',
        example: 'Você recebe visão no escuro...',
    })
    description: string;

    @ApiProperty({
        description: 'Tipo de habilidade',
        enum: AbilityRole,
        example: AbilityRole.RACE,
    })
    type: AbilityRole;
}
