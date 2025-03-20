import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDto {
    @ApiProperty({
        description: 'Nome da habilidade',
        example: 'Furtividade',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da habilidade',
        example: 'Permite mover-se silenciosamente e ocultar-se.',
    })
    description: string;

    @ApiProperty({
        description: 'Ações que a habilidade permite realizar',
        example: { ação: 'Esconder', descrição: 'Mover-se silenciosamente' },
    })
    actions: Record<string, any>;

    @ApiProperty({
        description: 'Atributo chave da habilidade',
        example: 'Destreza',
    })
    attributeKey: string;

    @ApiProperty({
        description: 'Indica se a habilidade é uma profissão',
        example: false,
    })
    isProfession: boolean;

    @ApiProperty({
        description: 'Indica se a habilidade requer treinamento',
        example: true,
    })
    isTraining: boolean;

    @ApiProperty({
        description: 'Indica se a habilidade sofre penalidade de armadura',
        example: true,
    })
    isArmorPenalty: boolean;
}