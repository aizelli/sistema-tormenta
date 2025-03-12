import { Chclass } from "src/modules/chclass/entities/chclass.entity";
import { Origin } from "src/modules/origin/entities/origin.entity";
import { Race } from "src/modules/race/entities/race.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export enum AbilityRole {
    RACE = 'raça',
    CLASS = 'classe',
    ORIGIN = 'origem'
}

@Entity()
export class Ability {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column({
        type: 'enum',
        enum: AbilityRole,
        default: null,
    })
    type: AbilityRole;

    @ManyToMany(() => Race, (race) => race.abilities)
    races: Race[];

    @ManyToMany(() => Origin, (origin) => origin.abilities)
    origins: Origin[];
}
