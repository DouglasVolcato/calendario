import { Task } from "../../../database/protocols/data/task-interface";

export interface CreateTaskUseCaseInterface {
  execute(areaName: string, taskBody: Task): Promise<boolean>;
}

export interface DeleteTaskUseCaseInterface {
  execute(areaName: string, taskId: number): Promise<boolean>;
}

export interface GetAllTasksUseCaseInterface {
  execute(areaName: string): Promise<Task[] | undefined>;
}

export interface GetTaskUseCaseInterface {
  execute(areaName: string, taskId: number): Promise<Task | undefined>;
}

export interface UpdateTaskUseCaseInterface {
  execute(areaName: string, taskId: number, taskBody: Task): Promise<boolean>;
}

export interface TaskServicesInterface {
  createTaskUseCaseInterface: CreateTaskUseCaseInterface;
  deleteTaskUseCaseInterface: DeleteTaskUseCaseInterface;
  getAllTasksUseCaseInterface: GetAllTasksUseCaseInterface;
  getTaskUseCaseInterface: GetTaskUseCaseInterface;
  updateTaskUseCaseInterface: UpdateTaskUseCaseInterface;
}
