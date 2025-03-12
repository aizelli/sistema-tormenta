import { Injectable } from '@nestjs/common';
import { CreateInventoryItemDto } from './dto/create-inventory-item.dto';
import { UpdateInventoryItemDto } from './dto/update-inventory-item.dto';
import { InventoryItem } from './entities/inventory-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryItemService {
  constructor(
    @InjectRepository(InventoryItem)
    private inventoryItemRepository: Repository<InventoryItem>
  ) { }

  create(createInventoryItemDto: CreateInventoryItemDto) {
    return 'This action adds a new inventoryItem';
  }

  findAll() {
    return `This action returns all inventoryItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryItem`;
  }

  update(id: number, updateInventoryItemDto: UpdateInventoryItemDto) {
    return `This action updates a #${id} inventoryItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryItem`;
  }

  async addItemToInventory(inventoryId: number, itemId: number, quantity: number): Promise<InventoryItem> {
    const inventoryItem = new InventoryItem();
    inventoryItem.inventoryId = inventoryId;
    inventoryItem.itemId = itemId;
    inventoryItem.quantity = quantity;
    return this.inventoryItemRepository.save(inventoryItem);
  }
}
