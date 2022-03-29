import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { NotFoundError } from 'rxjs';
import { ModifyCoffeeDto } from './dto/modify-coffee.dto';
import { Event } from 'src/events/entities/event.entity';
import { FlavorEntity } from './entities/flavor.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(FlavorEntity)
    private readonly flavorRepository: Repository<FlavorEntity>,
    private readonly connection: Connection
  ) {}

  findAll(query: PaginationQueryDto) {
    const {limit,offset } = query
    return this.coffeeRepository.find({
      relations: ['flavors'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    return await this.coffeeRepository.find({
      where: { id },
      relations: ['flavors'],
    });
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto, 'createCoffeeDto');
    const flavors = await this.preLoadCoffeeFlavors<CreateCoffeeDto>(
      createCoffeeDto,
    );
    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    return this.coffeeRepository.save(coffee);
  }

  async modify(id: number, updateCoffeeDto: ModifyCoffeeDto) {
    const flavors = updateCoffeeDto.flavors
      ? await this.preLoadCoffeeFlavors<CreateCoffeeDto>(updateCoffeeDto)
      : [];
    const coffee = await this.coffeeRepository.preload({
      id,
      ...updateCoffeeDto,
      flavors,
    });
    if (!coffee) {
      throw new NotFoundError(`coffee ${id} is not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async delete(id: number) {
    const coffee = await this.findOne(id);
    console.log(coffee);
    return this.coffeeRepository.remove(coffee);
  }

  private async preloadExistingFlavor(name: string): Promise<FlavorEntity> {
    const existingFlavor = await this.flavorRepository.findOne({
      where: { name },
    });
    if (existingFlavor) {
      return existingFlavor;
    }
    return this.flavorRepository.create({ name });
  }

  private async preLoadCoffeeFlavors<
    T extends CreateCoffeeDto | ModifyCoffeeDto,
  >(coffees: T): Promise<Awaited<FlavorEntity>[]> {
    return await Promise.all(
      coffees.flavors.map((flavor) => this.preloadExistingFlavor(flavor)),
    );
  }

  async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
      coffee.recommendDations++
      const recommendEvent = new Event();
      recommendEvent.type = 'coffee'
      recommendEvent.name = 'recommend_coffee'
      recommendEvent.payload = {coffeeId: coffee.id }
      await queryRunner.manager.save(coffee)
      await queryRunner.manager.save(recommendEvent)
      await queryRunner.commitTransaction()
    } catch(err) {
      await queryRunner.rollbackTransaction()
    } finally {
      await queryRunner.release()
    }

  }
}
