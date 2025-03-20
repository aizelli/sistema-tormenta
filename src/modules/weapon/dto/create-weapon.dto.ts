import { ApiProperty } from '@nestjs/swagger';

export class CreateWeaponDto {
    @ApiProperty({
        description: 'Nome da arma',
        example: 'Arco Longo',
    })
    name: string;

    @ApiProperty({
        description: 'Descrição da arma',
        example: 'Um arco simples de boa envergadura.',
    })
    description: string;

    @ApiProperty({
        description: 'Preço da arma',
        example: 50.00,
    })
    price: number;

    @ApiProperty({
        description: 'Dano da arma',
        example: '1d8',
    })
    damage: string;

    @ApiProperty({
        description: 'Crítico da arma',
        example: '19-20/x2',
    })
    critical: string;

    @ApiProperty({
        description: 'Alcance da arma',
        example: '15',
    })
    range: string;

    @ApiProperty({
        description: 'Número de slots que a arma ocupa',
        example: 2,
    })
    slots: number;

    @ApiProperty({
        description: 'Tipo da arma (objeto com informações adicionais)',
        example: { tipo: 'arma de longo alcance', material: 'madeira' },
    })
    type: Record<string, any>;

    @ApiProperty({
        description: 'Habilidades da arma (objeto com informações adicionais)',
        example: { precisao: '+1' },
    })
    ability: Record<string, any>;

    @ApiProperty({
        description: 'Munição da arma (se aplicável)',
        example: { tipo: 'flecha', quantidade: 20 },
    })
    ammo: Record<string, any>;
}