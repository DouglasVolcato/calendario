import { HttpRequest } from "./http/httpRequest-interface";
import { HttpResponse } from "./http/httpResponse-interface.ts";

export interface AreaControllerInterface {
  createArea(httpRequest: HttpRequest): Promise<HttpResponse>;
  deleteArea(httpRequest: HttpRequest): Promise<HttpResponse>;
  getAllAreas(httpRequest: HttpRequest): Promise<HttpResponse>;
  getArea(httpRequest: HttpRequest): Promise<HttpResponse>;
  updateArea(httpRequest: HttpRequest): Promise<HttpResponse>;
}
