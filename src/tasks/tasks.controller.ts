import { Task } from "./tasks.entity";
import { AppDataSource } from "../..";
import { instanceToPlain } from "class-transformer";

export class TasksController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async getAll(): Promise<Task[]> {
    // Declare a variable to hold all the tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: "ASC",
        },
      });

      // Convert the tasks instance to an array of object
      allTasks = instanceToPlain(allTasks) as Task[];

      return allTasks;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
