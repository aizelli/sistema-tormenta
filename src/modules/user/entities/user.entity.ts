import { Adventure } from "src/modules/adventure/entities/adventure.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    ADMIN = 'admin',
    MASTER = 'mestre',
    PLAYER = 'jogador'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    userName: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.PLAYER,
    })
    type: UserRole;

    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @Column({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @OneToMany(() => Adventure, (adventure) => adventure.user)
    adventures: Adventure[];
}
