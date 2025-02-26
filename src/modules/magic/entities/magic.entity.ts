import { createPoolCluster } from "mysql2";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ClassRole {
    ARCANE = "arcana",
    DIVINE = "divina",
    CIRCLES = "circulos"
}

export enum SchoolRole {
    ABJURATION = "abjuração",
    DIVINATION = "adivinhação",
    CONJURATION = "convocação",
    ENCHANTMENT = "encantamento",
    EVOCATION = "evocação",
    ILLUSION = "ilusão",
    NECROMANCY = "necromancia",
    TRANSMUTATION = "transmutação"
}

@Entity()
export class Magic {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('integer')
    levelCircle: number;

    @Column('varchar')
    range: string;

    @Column('varchar')
    duration: string;

    @Column('varchar')
    target: string;

    @Column({
        type: 'enum',
        enum: ClassRole,
        default: ClassRole.ARCANE,
    })
    classification: ClassRole;

    @Column({
        type: 'enum',
        enum: SchoolRole,
        default: SchoolRole.ABJURATION,
    })
    school: SchoolRole;
}
