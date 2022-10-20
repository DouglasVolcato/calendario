import { AreaInterface } from "../../database/protocols/data/area-interface";
import { AreaRepositoryInterface } from "../../database/protocols/repositories/area-repository-interface";
import { GetAreaUseCaseInterface } from "./protocols/area-services-interface";

export class GetAreaUseCase implements GetAreaUseCaseInterface {
  repository: AreaRepositoryInterface;

  constructor(repository: AreaRepositoryInterface) {
    this.repository = repository;
  }

  async execute(name: string): Promise<AreaInterface | undefined> {
    return await this.repository.getArea(name);
  }
}
