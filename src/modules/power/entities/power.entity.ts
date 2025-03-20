import { Character } from "src/modules/character/entities/character.entity";
import { God } from "src/modules/god/entities/god.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum PowerRole {
    WEAPON = 'arma',
    COMBAT = 'combate',
    DESTINY = 'destino',
    MAGIC = 'magia',
    GRANTED = 'concedida',
    TORMENT = 'tormenta'
}

@Entity()
export class Power {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('varchar')
    prerequisite: string;

    @Column({
        type: 'enum',
        enum: PowerRole,
        default: PowerRole.GRANTED,
    })
    type: PowerRole;
}
