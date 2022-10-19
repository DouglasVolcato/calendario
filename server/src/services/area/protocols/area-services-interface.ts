import { Area } from "../../../database/protocols/data/area-interface";

export interface CreateAreaUseCaseInterface {
  execute(areaBody: Area): Promise<boolean>;
}

export interface DeleteAreaUseCaseInterface {
  execute(name: string): Promise<boolean>;
}

export interface GetAllAreasUseCaseInterface {
  execute(): Promise<Area[]>;
}

export interface GetAreaUseCaseInterface {
  execute(name: string): Promise<Area | undefined>;
}

export interface UpdateAreaUseCaseInterface {
  execute(name: string, areaBody: Area): Promise<boolean>;
}

export interface AreaServicesInterface {
  createAreaUseCaseInterface: CreateAreaUseCaseInterface;
  deleteAreaUseCaseInterface: DeleteAreaUseCaseInterface;
  getAllAreasUseCaseInterface: GetAllAreasUseCaseInterface;
  getAreaUseCaseInterface: GetAreaUseCaseInterface;
  updateAreaUseCaseInterface: UpdateAreaUseCaseInterface;
}
