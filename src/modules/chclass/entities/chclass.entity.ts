import { Ability } from "src/modules/ability/entities/ability.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chclass {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string

    @Column({ type: 'json', nullable: true })
    traits: Record<string, any>;

    @ManyToMany(() => Ability, (ability) => ability.chclasses)
    @JoinTable({
        name: 'chclass_abilities',
        joinColumn: {
            name: 'abilityId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'chClassIds', referencedColumnName: 'id'
        }
    }) // Cria a tabela de junção
    abilities: Ability[];
}
