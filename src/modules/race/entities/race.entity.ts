import { Ability } from "src/modules/ability/entities/ability.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Race {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column({ type: 'json', nullable: true })
    attributes: Record<string, any>;

    @ManyToMany(() => Ability, (ability) => ability.races)
    @JoinTable({
        name: 'race_abilities',
        joinColumn: {
            name: 'abilityId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'raceIds', referencedColumnName: 'id'
        }
    }) // Cria a tabela de junção
    abilities: Ability[];
}
