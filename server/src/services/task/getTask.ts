import { TaskInterface } from "../../database/protocols/data/task-interface";
import { TaskRepositoryInterface } from "../../database/protocols/repositories/task-repository-interface";
import { GetTaskUseCaseInterface } from "./protocols/task-services-interface";

export class GetTaskUseCase implements GetTaskUseCaseInterface {
  repository: TaskRepositoryInterface;

  constructor(repository: TaskRepositoryInterface) {
    this.repository = repository;
  }

  async execute(
    areaName: string,
    taskId: string
  ): Promise<TaskInterface | undefined> {
    return await this.repository.getTask(areaName, taskId);
  }
}
