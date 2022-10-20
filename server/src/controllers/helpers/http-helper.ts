import { HttpHelpersInterface } from "../protocols/http/http-helpers-interface";
import { HttpResponse } from "../protocols/http/httpResponse-interface.ts";

export const HttpHelpers: HttpHelpersInterface = {
  badRequest(error: Error | unknown): HttpResponse {
    return {
      statusCode: 400,
      body: error,
    };
  },

  ok(data: any): HttpResponse {
    return {
      statusCode: 200,
      body: data,
    };
  },
};
