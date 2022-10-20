import { TaskInterface } from "../../../database/protocols/data/task-interface";

export interface CreateTaskUseCaseInterface {
  execute(areaName: string, taskBody: TaskInterface): Promise<boolean>;
}

export interface DeleteTaskUseCaseInterface {
  execute(areaName: string, taskId: string): Promise<boolean>;
}

export interface GetAllTasksUseCaseInterface {
  execute(areaName: string): Promise<TaskInterface[] | undefined>;
}

export interface GetTaskUseCaseInterface {
  execute(areaName: string, taskId: string): Promise<TaskInterface | undefined>;
}

export interface UpdateTaskUseCaseInterface {
  execute(
    areaName: string,
    taskId: string,
    taskBody: TaskInterface
  ): Promise<boolean>;
}

export interface TaskServicesInterface {
  createTaskUseCase: CreateTaskUseCaseInterface;
  deleteTaskUseCase: DeleteTaskUseCaseInterface;
  getAllTasksUseCase: GetAllTasksUseCaseInterface;
  getTaskUseCase: GetTaskUseCaseInterface;
  updateTaskUseCase: UpdateTaskUseCaseInterface;
}
