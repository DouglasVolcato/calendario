import { Request } from "express";
import { HttpRequest } from "../protocols/http/httpRequest-interface";

export function makeHttpRequest(req: Request): HttpRequest {
  return { body: req.body, id: req.params.id, name: req.params.name };
}
