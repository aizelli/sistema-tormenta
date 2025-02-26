import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('json')
    actions: string[];

    @Column('varchar')
    attributeKey: string;

    @Column('bool')
    isProfession: boolean;

    @Column('bool')
    isTraining: boolean;

    @Column('bool')
    isArmorPenalty: boolean;
}
