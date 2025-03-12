import { Module } from '@nestjs/common';
import { InventoryItemService } from './inventory-item.service';
import { InventoryItemController } from './inventory-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryItem } from './entities/inventory-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventoryItem])],
  controllers: [InventoryItemController],
  providers: [InventoryItemService],
})
export class InventoryItemModule { }
