import { Router } from "express";
import { AreaController } from "../controllers/area-controller";
import { AreaRepository } from "../database/repositories/area-repository";
import { AreaRoutes } from "../routes/area-routes";
import { RoutesInterface } from "../routes/protocols/routes-interface.ts";
import * as services from "../services/area";

export function makeAreaFactory(router: Router): RoutesInterface {
  const areaRepository = new AreaRepository();

  const createAreaUseCase = new services.CreateAreaUseCase(areaRepository);
  const deleteAreaUseCase = new services.DeleteAreaUseCase(areaRepository);
  const getAllAreasUseCase = new services.GetAllAreasUseCase(areaRepository);
  const getAreaUseCase = new services.GetAreaUseCase(areaRepository);
  const updateAreaUseCase = new services.UpdateAreaUseCase(areaRepository);

  const areaController = new AreaController({
    createAreaUseCase,
    deleteAreaUseCase,
    getAllAreasUseCase,
    getAreaUseCase,
    updateAreaUseCase,
  });

  const areaRoutes = new AreaRoutes(areaController, router);

  return areaRoutes;
}
