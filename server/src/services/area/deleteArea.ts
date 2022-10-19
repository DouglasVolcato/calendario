import { AreaRepositoryInterface } from "../../database/protocols/repositories/area-repository-interface";
import { DeleteAreaUseCaseInterface } from "./protocols/area-services-interface";

export class DeleteAreaUseCase implements DeleteAreaUseCaseInterface {
  repository: AreaRepositoryInterface;

  constructor(repository: AreaRepositoryInterface) {
    this.repository = repository;
  }

  async execute(name: string): Promise<boolean> {
    return await this.repository.deleteArea(name);
  }
}
