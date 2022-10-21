import { MissingParamError } from "../../controllers/helpers/errors/missingParam-error";
import { AreaInterface } from "../protocols/data/area-interface";
import { Entity } from "../protocols/entities/entity-interface";

export class Area implements Entity {
  body: AreaInterface;

  constructor(body: AreaInterface) {
    this.body = body;
  }

  validate(): void {
    if (!this.body.name) {
      throw new MissingParamError("name");
    }
  }

  getBody(): AreaInterface {
    return { name: this.body.name, tasks: this.body.tasks ?? [] };
  }
}
