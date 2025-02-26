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
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
    maxHalth: number;

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
    race: Race;

    @ManyToOne(() => Chclass)
    class: Chclass;

    @ManyToOne(() => Origin)
    origin: Origin;

    @OneToOne(() => Attribute)
    attribute: Attribute;

    @ManyToOne(() => God)
    god: God;

    @ManyToOne(() => Skill)
    skill: Skill;

    @ManyToOne(() => Power)
    power: Power;

    @ManyToOne(() => Weapon)
    weapon: Weapon;

    @ManyToOne(() => Armor)
    armor: Armor;

    @ManyToOne(() => Shild)
    shild: Shild;

    @ManyToOne(() => Magic)
    magic: Magic;

    @ManyToOne(() => Proficiency)
    proficiency: Proficiency

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Adventure, (adventure) => adventure.characters, { onDelete: 'SET NULL' })
    adventure: Adventure;
}
