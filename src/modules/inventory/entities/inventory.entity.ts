import { Character } from "src/modules/character/entities/character.entity";
import { InventoryItem } from "src/modules/inventory-item/entities/inventory-item.entity";
import { Item } from "src/modules/item/entities/item.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(() => Character, (character) => character.inventory)
    @JoinColumn()
    character: Character;

    @OneToMany(() => InventoryItem, (inventoryItem) => inventoryItem.inventoryId)
    inventoryItems: InventoryItem[];
}
