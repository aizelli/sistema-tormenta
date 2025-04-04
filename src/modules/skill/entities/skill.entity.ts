import { Character } from "src/modules/character/entities/character.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column({ type: 'json', nullable: true })
    actions: Record<string, any>;
    
    @Column('varchar')
    attributeKey: string;

    @Column('bool')
    isProfession: boolean;

    @Column('bool')
    isTraining: boolean;

    @Column('bool')
    isArmorPenalty: boolean;
}
