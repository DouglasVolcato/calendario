import { AreaInterface } from "../../database/protocols/data/area-interface";
import { AreaRepositoryInterface } from "../../database/protocols/repositories/area-repository-interface";
import { UpdateAreaUseCaseInterface } from "./protocols/area-services-interface";

export class UpdateAreaUseCase implements UpdateAreaUseCaseInterface {
  repository: AreaRepositoryInterface;

  constructor(repository: AreaRepositoryInterface) {
    this.repository = repository;
  }

  async execute(name: string, areaBody: AreaInterface): Promise<boolean> {
    return await this.repository.updateArea(name, areaBody);
  }
}
