import { TaskInterface } from "../data/task-interface";

export interface TaskRepositoryInterface {
  createTask(areaName: string, taskBody: TaskInterface): Promise<boolean>;
  getTask(areaName: string, taskId: string): Promise<TaskInterface | undefined>;
  getAllTasks(areaName: string): Promise<TaskInterface[] | undefined>;
  updateTask(
    areaName: string,
    taskId: string,
    taskBody: TaskInterface
  ): Promise<boolean>;
  deleteTask(areaName: string, taskId: string): Promise<boolean>;
}
