import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weapon {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('decimal')
    price: number;

    @Column('varchar')
    damage: string;

    @Column('varchar')
    critical: string;

    @Column('varchar')
    range: string;

    @Column('integer')
    slots: number;

    @Column({ type: 'json', nullable: true })
    type: Record<string, any>;

    @Column({ type: 'json', nullable: true })
    ability: Record<string, any>;

    @Column({ type: 'json', nullable: true })
    ammo: Record<string, any>;
}
