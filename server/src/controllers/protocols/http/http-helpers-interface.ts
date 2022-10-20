import { HttpResponse } from "./httpResponse-interface.ts";

export interface HttpHelpersInterface {
  badRequest(error: Error | unknown): HttpResponse;
  ok(data: any): HttpResponse;
}
