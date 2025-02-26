import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ItemRole {
    ADVENTUREGEAR = "equipamentos de aventuras",
    TOOLS = "ferramentas",
    CLOTHING = "vestuario",
    ESOTERIC = "esotéricos",
    ALCHEMICAL = "alquimicos",
    FOOD = "alimentação",
    ANIMALS = "animais",
    VEHICLES = "veiculos",
    SERVICES = "serviços",
    HIGHQUALITY = "item superior"
}

@Entity()
export class Item {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('decimal')
    price: number;

    @Column('integer')
    slots: number;

    @Column({
        type: 'enum',
        enum: ItemRole,
        default: ItemRole.ADVENTUREGEAR,
    })
    type: ItemRole;
}
