/**
 * @name: coffees.entity
 * @author: evil
 * @date: 2022-03-28 13:55
 * @description：coffees.entity
 * @update: 2022-03-28 13:55
 */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FlavorEntity } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name?: string;
  @Column()
  brand?: string;
  @JoinTable()
  @ManyToMany(() => FlavorEntity, (flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors?: FlavorEntity[];
}
