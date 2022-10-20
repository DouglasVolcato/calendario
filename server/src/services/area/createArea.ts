import { AreaInterface } from "../../database/protocols/data/area-interface";
import { AreaRepositoryInterface } from "../../database/protocols/repositories/area-repository-interface";
import { CreateAreaUseCaseInterface } from "./protocols/area-services-interface";

export class CreateAreaUseCase implements CreateAreaUseCaseInterface {
  repository: AreaRepositoryInterface;

  constructor(repository: AreaRepositoryInterface) {
    this.repository = repository;
  }

  async execute(areaBody: AreaInterface): Promise<boolean> {
    return await this.repository.createArea(areaBody);
  }
}
