import { ApiProperty } from '@nestjs/swagger';
import { ClassRole, SchoolRole } from '../entities/magic.entity';

export class CreateMagicDto {
    @ApiProperty({
        description: 'Nome da magia',
        example: 'Bola de Fogo',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da magia',
        example: 'Uma esfera de fogo que causa dano aos inimigos.',
    })
    description: string;

    @ApiProperty({
        description: 'Nível ou círculo da magia',
        example: 3,
    })
    levelCircle: number;

    @ApiProperty({
        description: 'Alcance da magia',
        example: '15 metros',
    })
    range: string;

    @ApiProperty({
        description: 'Duração da magia',
        example: 'Instantâneo',
    })
    duration: string;

    @ApiProperty({
        description: 'Alvo da magia',
        example: 'Criatura',
    })
    target: string;

    @ApiProperty({
        description: 'Classificação da magia (arcano, divino ou círculos)',
        enum: ClassRole,
        example: ClassRole.ARCANE,
    })
    classification: ClassRole;

    @ApiProperty({
        description: 'Escola da magia (abjuração, adivinhação, etc.)',
        enum: SchoolRole,
        example: SchoolRole.EVOCATION,
    })
    school: SchoolRole;
}