import { TaskInterface } from "../../database/protocols/data/task-interface";
import { TaskRepositoryInterface } from "../../database/protocols/repositories/task-repository-interface";
import { GetAllTasksUseCaseInterface } from "./protocols/task-services-interface";

export class GetAllTasksUseCase implements GetAllTasksUseCaseInterface {
  repository: TaskRepositoryInterface;

  constructor(repository: TaskRepositoryInterface) {
    this.repository = repository;
  }

  async execute(areaName: string): Promise<TaskInterface[] | undefined> {
    return await this.repository.getAllTasks(areaName);
  }
}
