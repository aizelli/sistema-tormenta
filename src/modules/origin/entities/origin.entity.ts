import { Ability } from "src/modules/ability/entities/ability.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Origin {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column({ type: 'json', nullable: true })
    traits: Record<string, any>;

    @ManyToMany(() => Ability, (ability) => ability.origins)
    @JoinTable({
        name: 'origin_abilities',
        joinColumn: {
            name: 'originId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'abilityId', referencedColumnName: 'id'
        }
    }) // Cria a tabela de junção
    abilities: Ability[];
}
