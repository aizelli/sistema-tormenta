import { join } from "path";
import { Adventure } from "src/modules/adventure/entities/adventure.entity";
import { Armor } from "src/modules/armor/entities/armor.entity";
import { Attribute } from "src/modules/attribute/entities/attribute.entity";
import { Chclass } from "src/modules/chclass/entities/chclass.entity";
import { God } from "src/modules/god/entities/god.entity";
import { Magic } from "src/modules/magic/entities/magic.entity";
import { Origin } from "src/modules/origin/entities/origin.entity";
import { Power } from "src/modules/power/entities/power.entity";
import { Proficiency } from "src/modules/proficiency/entities/proficiency.entity";
import { Race } from "src/modules/race/entities/race.entity";
import { Shild } from "src/modules/shild/entities/shild.entity";
import { Skill } from "src/modules/skill/entities/skill.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Weapon } from "src/modules/weapon/entities/weapon.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string

    @Column('integer')
    health: number;

    @Column('integer')
    maxHealth: number;

    @Column('integer')
    mana: number;

    @Column('integer')
    maxMana: number;

    @Column('integer')
    defence: number;

    @Column('integer')
    level: number;

    @Column('integer')
    tibar: number;

    @Column('integer')
    attributePoints: Number;

    @Column('boolean')
    inGame: boolean;

    @ManyToOne(() => Race)
    @JoinColumn({ name: 'raceId' })
    race: Race;

    @ManyToOne(() => Chclass)
    @JoinColumn({ name: 'chClassId' })
    chClass: Chclass;

    @ManyToOne(() => Origin)
    @JoinColumn({ name: 'originId' })
    origin: Origin;

    @OneToOne(() => Attribute)
    @JoinColumn({ name: 'attributeId' })
    attribute: Attribute;

    @ManyToOne(() => God)
    @JoinColumn({ name: 'godId' })
    god: God;

    @ManyToOne(() => Weapon)
    @JoinColumn({ name: 'weaponId' })
    weapon: Weapon;

    @ManyToOne(() => Armor)
    @JoinColumn({ name: 'armorId' })
    armor: Armor;

    @ManyToOne(() => Shild)
    @JoinColumn({ name: 'shildId' })
    shild: Shild;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Adventure, (adventure) => adventure.characters, { onDelete: 'SET NULL' })
    adventure: Adventure;

    @ManyToMany(() => Skill, (skill) => skill.id)
    @JoinTable({
        name: 'character_skills',
        joinColumn: {
            name: 'characterId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'skillId', referencedColumnName: 'id'
        }
    })
    skill: Skill[];

    @ManyToMany(() => Proficiency, (proficiency) => proficiency.id)
    @JoinTable({
        name: 'character_proficiencies',
        joinColumn: {
            name: 'characterId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'proficiencyIds', referencedColumnName: 'id'
        }
    })
    proficiency: Proficiency[];

    @ManyToMany(() => Power, (power) => power.id)
    @JoinTable({
        name: 'character_powers',
        joinColumn: {
            name: 'characterId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'powerIds', referencedColumnName: 'id'
        }
    })
    power: Power[];

    @ManyToMany(() => Magic, (magic) => magic.id)
    @JoinTable({
        name: 'character_magics',
        joinColumn: {
            name: 'characterId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'magicIds', referencedColumnName: 'id'
        }
    })
    magic: Magic[];
}
