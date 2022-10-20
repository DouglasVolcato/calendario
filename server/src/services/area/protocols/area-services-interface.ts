import { AreaInterface } from "../../../database/protocols/data/area-interface";

export interface CreateAreaUseCaseInterface {
  execute(areaBody: AreaInterface): Promise<boolean>;
}

export interface DeleteAreaUseCaseInterface {
  execute(name: string): Promise<boolean>;
}

export interface GetAllAreasUseCaseInterface {
  execute(): Promise<AreaInterface[]>;
}

export interface GetAreaUseCaseInterface {
  execute(name: string): Promise<AreaInterface | undefined>;
}

export interface UpdateAreaUseCaseInterface {
  execute(name: string, areaBody: AreaInterface): Promise<boolean>;
}

export interface AreaServicesInterface {
  createAreaUseCase: CreateAreaUseCaseInterface;
  deleteAreaUseCase: DeleteAreaUseCaseInterface;
  getAllAreasUseCase: GetAllAreasUseCaseInterface;
  getAreaUseCase: GetAreaUseCaseInterface;
  updateAreaUseCase: UpdateAreaUseCaseInterface;
}
