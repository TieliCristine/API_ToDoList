import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";

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

  findOne(id: number) {
    return `This action returns a #${ id } task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${ id } task`;
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
