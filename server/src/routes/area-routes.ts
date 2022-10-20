import { Request, Response, Router } from "express";
import { makeHttpRequest } from "../controllers/helpers/httpRequestFactory";
import { AreaControllerInterface } from "../controllers/protocols/area-controller-interface";
import { RoutesInterface } from "./protocols/routes-interface.ts";

export class AreaRoutes implements RoutesInterface {
  controller: AreaControllerInterface;
  router: Router;

  constructor(controller: AreaControllerInterface, router: Router) {
    this.controller = controller;
    this.router = router;
  }

  route(): Router {
    this.router.post("/create-area", async (req: Request, res: Response) => {
      const httpRequest = makeHttpRequest(req);
      const httpResponse = await this.controller.createArea(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    });

    this.router.delete(
      "/delete-area/:name",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.deleteArea(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.delete(
      "/get-all-areas",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.getAllAreas(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.delete(
      "/get-area/:name",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.getArea(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.delete(
      "/update-area/:name",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.updateArea(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    return this.router;
  }
}
