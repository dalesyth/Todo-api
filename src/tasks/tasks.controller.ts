import { Task } from "./tasks.entity";
import { AppDataSource } from "../..";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

class TasksController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    // Declare a variable to hold all the tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: "ASC",
        },
      });

      // Convert the tasks instance to an array of object
      allTasks = instanceToPlain(allTasks) as Task[];

      return res.json(allTasks).status(200);
    } catch (_error) {
      return res.json({ error: "Internal Server Error" }).status(500);
    }
  }
}

export const taskController = new TasksController();
