import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from "@nestjs/common";
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from "./entities/task.entity";

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    try {
      return this.taskService.create(createTaskDto);
    } catch (e) {
      console.error(e);
      throw new BadRequestException(e);
    }
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: number) {
    return this.taskService.findAllByUser(userId);
  }
  //
  // @Get('search')
  // async findOne(@Query('q') searchTerm: string): Promise<Task[]> {
  //   return this.taskService.findOne(searchTerm);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
