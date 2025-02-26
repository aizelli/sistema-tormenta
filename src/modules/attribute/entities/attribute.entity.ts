import { Character } from "src/modules/character/entities/character.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attribute {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('integer')
    strength: number;

    @Column('integer')
    dexterity: number;

    @Column('integer')
    constitution: number;

    @Column('integer')
    intelligence: number;

    @Column('integer')
    wisdom: number;

    @Column('integer')
    charisma: number;

    @OneToOne(() => Character, (character) => Character)
    character: Character
}
