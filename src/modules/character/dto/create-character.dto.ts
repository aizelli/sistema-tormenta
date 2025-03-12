import { ApiProperty } from "@nestjs/swagger";

export class CreateCharacterDto {
    @ApiProperty({
        description: 'Nome do Personagem',
        example: 'Xandão',
    })
    name: string;

    @ApiProperty({
        description: 'Lore do porsonagem',
        example: 'Quando ainda bebê foi cuidado por monges....',
    })
    description: string;

    @ApiProperty({
        description: 'Vida atual do personagem',
        example: 11,
    })
    health: number;

    @ApiProperty({
        description: 'Vida total do personagem',
        example: 15,
    })
    maxHealth: number;

    @ApiProperty({
        description: 'Mana atual do personagem',
        example: 11,
    })
    mana: number;

    @ApiProperty({
        description: 'Mana total do personagem',
        example: 15,
    })
    maxMana: number;

    @ApiProperty({
        description: 'Defesa total do personagem',
        example: 8,
    })
    defence: number;

    @ApiProperty({
        description: 'Level atual do personagem',
        example: 1,
    })
    level: number;

    @ApiProperty({
        description: 'Total de moeda do personagem',
        example: 11,
    })
    tibar: number;

    @ApiProperty({
        description: 'Quantidade de pontos de distribuição do personagem',
        example: 11,
    })
    attributePoints: number;

    @ApiProperty({
        description: 'Indica se o persoangem está em uma aventura (true - sim, false - não)',
        example: false,
    })
    inGame: boolean;

    // Atributos
    @ApiProperty({
        description: 'Força do personagem',
        example: 10
    })
    strength: number;

    @ApiProperty({
        description: 'Destreza do personagem',
        example: 12
    })
    dexterity: number;

    @ApiProperty({
        description: 'Constituição do personagem',
        example: 14
    })
    constitution: number;

    @ApiProperty({
        description: 'Inteligência do personagem',
        example: 16
    })
    intelligence: number;

    @ApiProperty({
        description: 'Sabedoria do personagem',
        example: 18
    })
    wisdom: number;

    @ApiProperty({
        description: 'Carisma do personagem',
        example: 20
    })
    charisma: number;

    // IDs das relações com outras entidades
    @ApiProperty({
        description: 'Indica o id do usuário que o personagem faz relação',
        example: 1,
    })
    userId: number;

    @ApiProperty({
        description: 'Indica o id da raça que o personagem faz relação',
        example: 1,
    })
    raceId: number;

    @ApiProperty({
        description: 'Indica o id da classe que o personagem faz relação',
        example: 1,
    })
    chClassId: number;

    @ApiProperty({
        description: 'Indica o id da origem que o personagem faz relação',
        example: 1,
    })
    originId: number;

    @ApiProperty({
        description: 'Indica o id dos atributos que o personagem faz relação',
        example: 1,
    })
    attributeId: number;

    @ApiProperty({
        description: 'Indica o id do Deus que o personagem faz relação',
        example: 1,
    })
    godId: number;

    @ApiProperty({
        description: 'Indica o id das pericias que o personagem faz relação',
        example: [{ id: 1 }, { id: 2 }]
    })
    skillIds: number[];

    @ApiProperty({
        description: 'Indica o id dos poderes que o personagem faz relação',
        example: [{ id: 1 }, { id: 2 }]
    })
    powerIds: number[];

    @ApiProperty({
        description: 'Indica o id da arma que o personagem faz relação',
        example: 1,
    })
    weaponId: number;

    @ApiProperty({
        description: 'Indica o id da armadura que o personagem faz relação',
        example: 1,
    })
    armorId: number;

    @ApiProperty({
        description: 'Indica o id do escudo que o personagem faz relação',
        example: 1,
    })
    shildId: number;

    @ApiProperty({
        description: 'Indica o id das magias que o personagem faz relação',
        example: [{ id: 1 }, { id: 2 }]
    })
    magicIds: number[];

    @ApiProperty({
        description: 'Indica o id do usuário que o personagem faz relação',
        example: [{ id: 1 }, { id: 2 }],
    })
    proficiencyIds: number[];

    @ApiProperty({
        description: 'Indica o id da aventura que o personagem faz relação',
        example: 1,
    })
    adventureId: number;
}