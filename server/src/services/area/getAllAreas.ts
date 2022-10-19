import { Area } from "../../database/protocols/data/area-interface";
import { AreaRepositoryInterface } from "../../database/protocols/repositories/area-repository-interface";
import { GetAllAreasUseCaseInterface } from "./protocols/area-services-interface";

export class GetAllAreasUseCase implements GetAllAreasUseCaseInterface {
  repository: AreaRepositoryInterface;

  constructor(repository: AreaRepositoryInterface) {
    this.repository = repository;
  }

  async execute(): Promise<Area[]> {
    return await this.repository.getAllAreas();
  }
}
