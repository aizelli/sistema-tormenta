import { Power } from "src/modules/power/entities/power.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class God {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('varchar')
    beliefsGoals: string;

    @Column('varchar')
    holySymbol: string;

    @Column('varchar')
    channelEnergy: string;

    @Column('varchar')
    favoredWeapon: string;

    @Column('varchar')
    devotees: string;

    @Column('varchar')
    dutiesRestrictions: string;

    @ManyToMany(() => Power)
    @JoinTable({
        name: 'power_gods',
        joinColumn: {
            name: 'godId', referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'powerId', referencedColumnName: 'id'
        }
    })
    powers: Power[];
}
