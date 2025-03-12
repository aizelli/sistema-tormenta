import { Inventory } from "src/modules/inventory/entities/inventory.entity";
import { Item } from "src/modules/item/entities/item.entity";
import { PrimaryColumn, Column, ManyToOne, JoinColumn, Entity } from "typeorm";

@Entity()
export class InventoryItem {
    @PrimaryColumn()
    inventoryId: number;

    @PrimaryColumn()
    itemId: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Inventory, (inventory) => inventory.inventoryItems)
    @JoinColumn({ name: 'inventoryId' })
    inventory: Inventory;

    @ManyToOne(() => Item, (item) => item.inventoryItems)
    @JoinColumn({ name: 'itemId' })
    item: Item;
}
