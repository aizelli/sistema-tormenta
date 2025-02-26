import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeOrmConfig';
import { UserModule } from './modules/user/user.module';
import { AbilityModule } from './modules/ability/ability.module';
import { AdventureModule } from './modules/adventure/adventure.module';
import { ArmorModule } from './modules/armor/armor.module';
import { AttributeModule } from './modules/attribute/attribute.module';
import { CategoryModule } from './modules/category/category.module';
import { CharacterModule } from './modules/character/character.module';
import { ChclassModule } from './modules/chclass/chclass.module';
import { GodModule } from './modules/god/god.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { ItemModule } from './modules/item/item.module';
import { MagicModule } from './modules/magic/magic.module';
import { OriginModule } from './modules/origin/origin.module';
import { PowerModule } from './modules/power/power.module';
import { ProficiencyModule } from './modules/proficiency/proficiency.module';
import { RaceModule } from './modules/race/race.module';
import { ShildModule } from './modules/shild/shild.module';
import { SkillModule } from './modules/skill/skill.module';
import { WeaponModule } from './modules/weapon/weapon.module';
import { AmmoModule } from './modules/ammo/ammo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AbilityModule,
    AdventureModule,
    AmmoModule,
    ArmorModule,
    AttributeModule,
    CategoryModule,
    CharacterModule,
    ChclassModule,
    GodModule,
    InventoryModule,
    ItemModule,
    MagicModule,
    OriginModule,
    PowerModule,
    ProficiencyModule,
    RaceModule,
    ShildModule,
    SkillModule,
    UserModule,
    WeaponModule
  ]
}) export class AppModule { }
