import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { ModifyCoffeeDto } from './dto/modify-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  getCoffee(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }

  @Post('modify/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  modifyName(@Param('id') id: number, @Body() body: ModifyCoffeeDto) {
    console.log(id, typeof id, 'id');
    return this.coffeesService.modify(id, body);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createCoffee(@Body() body: CreateCoffeeDto) {
    return this.coffeesService.create(body);
  }
}
