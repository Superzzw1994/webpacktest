import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Coffee} from './coffees.entity';

@Entity()
export class FlavorEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
