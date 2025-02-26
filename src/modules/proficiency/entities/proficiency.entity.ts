import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proficiency {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;
}
