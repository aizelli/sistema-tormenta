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
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    defence: number;
    level: number;
    tibar: number;
    attributePoints: number;
    inGame: boolean;

    // IDs das relações com outras entidades
    raceId: number;
    classId: number;
    originId: number;
    attributeId: number;
    godId: number;
    skillId: number;
    powerId: number;
    weaponId: number;
    armorId: number;
    shildId: number;
    magicId: number;
    proficiencyId: number;
    userId: number;
    adventureId: number;
}
