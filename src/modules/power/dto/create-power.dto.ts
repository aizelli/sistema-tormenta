import { ApiProperty } from '@nestjs/swagger';
import { PowerRole } from '../entities/power.entity';

export class CreatePowerDto {
    @ApiProperty({
        description: 'Nome do poder',
        example: 'Fúria Divina',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição do poder',
        example: 'Canaliza a fúria dos deuses para aumentar a força.',
    })
    description: string;

    @ApiProperty({
        description: 'Pré-requisito para usar o poder',
        example: 'Força 15',
    })
    prerequisite: string;

    @ApiProperty({
        description: 'Tipo do poder',
        enum: PowerRole,
        example: PowerRole.GRANTED,
    })
    type: PowerRole;

    @ApiProperty({
        description: 'ID do deus que concede o poder (se aplicável)',
        example: 1,
    })
    godId: number | null; // Aceita número ou null

    @ApiProperty({
        description: 'IDs dos personagens que possuem o poder',
        example: [1, 2, 3],
    })
    characterIds: number;
}