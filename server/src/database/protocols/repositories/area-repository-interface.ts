import { Area } from "../data/area-interface";

export interface AreaRepositoryInterface {
  createArea(areaBody: Area): Promise<boolean>;
  getArea(name: string): Promise<Area | undefined>;
  getAllAreas(): Promise<Area[]>;
  updateArea(name: string, areaBody: Area): Promise<boolean>;
  deleteArea(name: string): Promise<boolean>;
}
