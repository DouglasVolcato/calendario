import { Task } from "../data/task-interface";

export interface TaskRepositoryInterface {
  createTask(areaName: string, taskBody: Task): Promise<boolean>;
  getTask(areaName: string, taskId: number): Promise<Task | undefined>;
  getAllTasks(areaName: string): Promise<Task[] | undefined>;
  updateTask(
    areaName: string,
    taskId: number,
    taskBody: Task
  ): Promise<boolean>;
  deleteTask(areaName: string, taskId: number): Promise<boolean>;
}
