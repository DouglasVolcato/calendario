import { AreaServicesInterface } from "../services/area/protocols/area-services-interface";
import { MissingParamError } from "./helpers/errors/missingParam-error";
import { HttpHelpers } from "./helpers/http-helper";
import { AreaControllerInterface } from "./protocols/area-controller-interface";
import { HttpRequest } from "./protocols/http/httpRequest-interface";
import { HttpResponse } from "./protocols/http/httpResponse-interface.ts";
const { ok, badRequest } = HttpHelpers;

export class AreaController implements AreaControllerInterface {
  services: AreaServicesInterface;

  constructor(services: AreaServicesInterface) {
    this.services = services;
  }

  async createArea(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaBody = httpRequest.body;
      const created = await this.services.createAreaUseCase.execute(areaBody);
      return ok({ created });
    } catch (error) {
      return badRequest(error);
    }
  }

  async deleteArea(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const name = httpRequest.name;
      if (name) {
        const deleted = await this.services.deleteAreaUseCase.execute(name);
        return ok({ deleted });
      } else {
        return badRequest(new MissingParamError("name"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }

  async getAllAreas(httpRequest: HttpRequest): Promise<HttpResponse> {
    const foundAreas = await this.services.getAllAreasUseCase.execute();
    return ok({ foundAreas });
  }

  async getArea(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const name = httpRequest.name;
      if (name) {
        const found = await this.services.getAreaUseCase.execute(name);
        return ok({ found });
      } else {
        return badRequest(new MissingParamError("name"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }

  async updateArea(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const areaBody = httpRequest.body;
      const name = httpRequest.name;
      if (name && areaBody) {
        const updated = this.services.updateAreaUseCase.execute(name, areaBody);
        return ok({ updated });
      } else {
        return badRequest(new MissingParamError("name / body"));
      }
    } catch (error) {
      return badRequest(error);
    }
  }
}
