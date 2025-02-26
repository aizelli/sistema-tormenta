import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Armor {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('integer')
    defence: number;

    @Column('decimal')
    price: number;

    @Column('integer')
    slots: number;

    @Column({ type: 'json', nullable: true })
    type: Record<string, any>;

    @Column({ type: 'json', nullable: true })
    ability: Record<string, any>;
}
