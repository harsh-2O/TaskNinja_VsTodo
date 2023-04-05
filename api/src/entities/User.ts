import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Check,
  OneToMany,
} from "typeorm";
import { Todo } from "./Todo";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  name: string;

  @Column({ type: "text" })
  @Check(`LENGTH(${Column}) <= 255`)
  githubId: string;

  @OneToMany(() => Todo, (t) => t.creator)
  todos: Promise<Todo[]>;
}
