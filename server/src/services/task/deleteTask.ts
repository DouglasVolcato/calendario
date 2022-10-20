import { TaskRepositoryInterface } from "../../database/protocols/repositories/task-repository-interface";
import { DeleteTaskUseCaseInterface } from "./protocols/task-services-interface";

export class DeleteTaskUseCase implements DeleteTaskUseCaseInterface {
  repository: TaskRepositoryInterface;

  constructor(repository: TaskRepositoryInterface) {
    this.repository = repository;
  }

  async execute(areaName: string, taskId: string): Promise<boolean> {
    return await this.repository.deleteTask(areaName, taskId);
  }
}
