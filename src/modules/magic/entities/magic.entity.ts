import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Magic {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;
}
