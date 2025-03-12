import { ApiProperty } from '@nestjs/swagger';

export class CreateGodDto {
    @ApiProperty({
        description: 'Nome do deus',
        example: 'Kallyadranoch',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição do deus',
        example: 'Deus da guerra, da destruição...',
    })
    description: string;

    @ApiProperty({
        description: 'Crenças e objetivos do deus',
        example: 'Lealdade, ordem, disciplina...',
    })
    beliefsGoals: string;

    @ApiProperty({
        description: 'Símbolo sagrado do deus',
        example: 'Um machado de guerra negro',
    })
    holySymbol: string;

    @ApiProperty({
        description: 'Tipo de energia canalizada pelo deus',
        example: 'Força',
    })
    channelEnergy: string;

    @ApiProperty({
        description: 'Arma favorecida pelo deus',
        example: 'Machado de guerra',
    })
    favoredWeapon: string;

    @ApiProperty({
        description: 'Tipos de devotos do deus',
        example: 'Guerreiros, paladinos...',
    })
    devotees: string;

    @ApiProperty({
        description: 'Deveres e restrições dos devotos do deus',
        example: 'Proteger os fracos...',
    })
    dutiesRestrictions: string;

}