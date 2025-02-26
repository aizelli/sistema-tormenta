import { PrimaryGeneratedColumn, Column, Entity} from "typeorm";

@Entity()
export class Ammo {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('decimal')
    price: number;

    @Column('integer')
    slots: number;


}
