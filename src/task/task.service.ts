import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Like, Repository } from "typeorm";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.save(createTaskDto);
  }

  async findAllByUser(userId: number): Promise<Task[]> {
    return this.taskRepository.find({ where: { user: { id: userId } }});
  }

  // async findOne(searchTerm: string): Promise<Task[]> {
  //   return this.taskRepository.find({
  //     where: [
  //       { title: Like(`%${searchTerm}%`) },
  //       { description: Like(`%${searchTerm}%`) },
  //     ]
  //   });
  // }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
