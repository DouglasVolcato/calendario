import { Task } from "../../database/protocols/data/task-interface";
import { TaskRepositoryInterface } from "../../database/protocols/repositories/task-repository-interface";
import { CreateTaskUseCaseInterface } from "./protocols/task-services-interface";

export class CreateTaskUseCase implements CreateTaskUseCaseInterface {
  repository: TaskRepositoryInterface;

  constructor(repository: TaskRepositoryInterface) {
    this.repository = repository;
  }

  async execute(areaName: string, taskBody: Task): Promise<boolean> {
    return await this.repository.createTask(areaName, taskBody);
  }
}
