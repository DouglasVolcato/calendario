import { TaskInterface } from "../../database/protocols/data/task-interface";
import { TaskRepositoryInterface } from "../../database/protocols/repositories/task-repository-interface";
import { UpdateTaskUseCaseInterface } from "./protocols/task-services-interface";

export class UpdateTaskUseCase implements UpdateTaskUseCaseInterface {
  repository: TaskRepositoryInterface;

  constructor(repository: TaskRepositoryInterface) {
    this.repository = repository;
  }

  async execute(
    areaName: string,
    taskId: string,
    taskBody: TaskInterface
  ): Promise<boolean> {
    const foundTask = await this.repository.getTask(areaName, taskId);
    if (foundTask) {
      const update = Object.assign(foundTask, taskBody);
      return await this.repository.updateTask(areaName, taskId, update);
    } else {
      return false;
    }
  }
}
