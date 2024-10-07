import { TaskStatus } from "../task-status.enum";

export class CreateTaskDto {
  userId: string;
  title: string;
  description: string;
  status: TaskStatus;
}
