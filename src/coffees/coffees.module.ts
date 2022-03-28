import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees.entity';
import { FlavorEntity } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, FlavorEntity])],
  controllers: [CoffeesController],
  providers: [CoffeesService]
})
export class CoffeesModule {}
