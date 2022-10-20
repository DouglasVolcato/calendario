import { TaskServicesInterface } from "../services/task/protocols/task-services-interface";
import { MissingParamError } from "./helpers/errors/missingParam-error";
import { HttpHelpers } from "./helpers/http-helper";
import { HttpRequest } from "./protocols/http/httpRequest-interface";
import { HttpResponse } from "./protocols/http/httpResponse-interface.ts";
import { TaskControllerInterface } from "./protocols/task-controller-interface";
const { ok, badRequest } = HttpHelpers;

export class TaskController implements TaskControllerInterface {
  services: TaskServicesInterface;

  constructor(services: TaskServicesInterface) {
    this.services = services;
  }

  async createTask(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaName = httpRequest.name;
      const taskBody = httpRequest.body;
      if (areaName && taskBody) {
        const created = await this.services.createTaskUseCase.execute(
          areaName,
          taskBody
        );
        return ok({ created });
      } else {
        return badRequest(new MissingParamError("name / body"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }

  async deleteTask(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaName = httpRequest.name;
      const taskId = httpRequest.id;
      if (areaName && taskId) {
        const deleted = await this.services.deleteTaskUseCase.execute(
          areaName,
          taskId
        );
        return ok({ deleted });
      } else {
        return badRequest(new MissingParamError("name / id"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }

  async getAllTasks(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaName = httpRequest.name;
      if (areaName) {
        const foundTasks = await this.services.getAllTasksUseCase.execute(
          areaName
        );
        return ok({ foundTasks });
      } else {
        return badRequest(new MissingParamError("name"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }

  async getTask(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaName = httpRequest.name;
      const taskId = httpRequest.id;
      if (taskId && areaName) {
        const found = await this.services.getTaskUseCase.execute(
          areaName,
          taskId
        );
        return ok({ found });
      } else {
        return badRequest(new MissingParamError("name / id"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }

  async updateTask(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaName = httpRequest.name;
      const taskId = httpRequest.id;
      const taskBody = httpRequest.body;
      if (areaName && taskId && taskBody) {
        const updated = await this.services.updateTaskUseCase.execute(
          areaName,
          taskId,
          taskBody
        );
        return ok({ updated });
      } else {
        return badRequest(new MissingParamError("id / name / body"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }
}
