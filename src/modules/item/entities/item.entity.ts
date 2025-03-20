import { InventoryItem } from "src/modules/inventory-item/entities/inventory-item.entity";
import { Inventory } from "src/modules/inventory/entities/inventory.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: 'json', nullable: true })
    effects: Record<string, any>;

    @OneToMany(() => InventoryItem, (inventoryItem) => inventoryItem.item)
    inventoryItems: InventoryItem[];
}
