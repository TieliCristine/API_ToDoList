import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Task } from "../../task/entities/task.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id?: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}