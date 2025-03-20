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

}