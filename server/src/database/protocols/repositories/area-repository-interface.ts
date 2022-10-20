import { AreaInterface } from "../data/area-interface";

export interface AreaRepositoryInterface {
  createArea(areaBody: AreaInterface): Promise<boolean>;
  getArea(name: string): Promise<AreaInterface | undefined>;
  getAllAreas(): Promise<AreaInterface[]>;
  updateArea(name: string, areaBody: AreaInterface): Promise<boolean>;
  deleteArea(name: string): Promise<boolean>;
}
