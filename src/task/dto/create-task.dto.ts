import { TaskStatus } from "../task-status.enum";
import { User } from "../../user/entities/user.entity";

export class CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
  user: User;
}
