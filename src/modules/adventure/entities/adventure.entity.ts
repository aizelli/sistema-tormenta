import { Character } from "src/modules/character/entities/character.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Adventure {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @ManyToOne(() => User, (user) => user.adventures, { onDelete: 'SET NULL' })
    user: User;

    @OneToMany(() => Character, (character) => character.adventure)
    characters: Character[];

}
