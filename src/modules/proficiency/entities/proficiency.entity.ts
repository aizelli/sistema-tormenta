import { Character } from "src/modules/character/entities/character.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proficiency {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @ManyToMany(() => Character, (character) => character.proficiency)
    characters: Character[];

}
