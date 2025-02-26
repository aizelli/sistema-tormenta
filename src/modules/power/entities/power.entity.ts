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

    @ManyToOne(() => God, { nullable: true }) // Permite null quando necessário
    gods: God[] | null;

    @BeforeInsert()
    @BeforeUpdate()
    validateGod() {
        if (this.type == PowerRole.GRANTED && !this.gods) {
            throw new Error('O campo god é obrigatório quando type é GRANTED.');
        } else if (this.type !== PowerRole.GRANTED) {
            this.gods = null; // Se não for GRANTED, mantém null
        }
    }
}
