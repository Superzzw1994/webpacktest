import { Column, Entity, Index, PrimaryColumn } from "typeorm";
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  name: string;
  @Column('json')
  payload: Record<string, any>
}
