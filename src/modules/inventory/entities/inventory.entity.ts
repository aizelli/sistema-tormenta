import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;
}
