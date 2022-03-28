import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class ModifyCoffeeDto extends PartialType(CreateCoffeeDto) {}
