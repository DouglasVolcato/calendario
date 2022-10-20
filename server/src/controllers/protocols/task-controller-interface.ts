import { HttpRequest } from "./http/httpRequest-interface";
import { HttpResponse } from "./http/httpResponse-interface.ts";

export interface TaskControllerInterface {
  createTask(httpRequest: HttpRequest): Promise<HttpResponse>;
  deleteTask(httpRequest: HttpRequest): Promise<HttpResponse>;
  getAllTasks(httpRequest: HttpRequest): Promise<HttpResponse>;
  getTask(httpRequest: HttpRequest): Promise<HttpResponse>;
  updateTask(httpRequest: HttpRequest): Promise<HttpResponse>;
}
