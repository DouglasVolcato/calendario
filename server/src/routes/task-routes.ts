import { Request, Response, Router } from "express";
import { makeHttpRequest } from "../controllers/helpers/httpRequestFactory";
import { TaskControllerInterface } from "../controllers/protocols/task-controller-interface";
import { RoutesInterface } from "./protocols/routes-interface.ts";

export class TaskRoutes implements RoutesInterface {
  controller: TaskControllerInterface;
  router: Router;

  constructor(controller: TaskControllerInterface, router: Router) {
    this.controller = controller;
    this.router = router;
  }

  route(): Router {
    this.router.post(
      "/create-task/:name",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.createTask(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.delete(
      "/create-task/:name/:id",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.deleteTask(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.get(
      "/get-all-tasks/:name",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.getAllTasks(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.get(
      "/get-task/:name/:id",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.getAllTasks(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    this.router.get(
      "/update-task/:name/:id",
      async (req: Request, res: Response) => {
        const httpRequest = makeHttpRequest(req);
        const httpResponse = await this.controller.updateTask(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
      }
    );

    return this.router;
  }
}
