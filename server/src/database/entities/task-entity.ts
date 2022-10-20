import { MissingParamError } from "../../controllers/helpers/errors/missingParam-error";
import { TaskInterface } from "../protocols/data/task-interface";
import { Entity } from "../protocols/entities/entity-interface";
import { v4 as uuid } from "uuid";

export class Area implements Entity {
  body: TaskInterface;

  constructor(body: TaskInterface) {
    this.body = body;
  }

  validate(): void {
    if (
      !this.body.name ||
      !this.body.description ||
      !this.body.deadline ||
      !this.body.agreedDeadline ||
      !this.body.urgency ||
      !this.body.gravity ||
      !this.body.tendency ||
      !this.body.legalDemand
    ) {
      throw new MissingParamError("name");
    }
  }

  getBody(): TaskInterface {
    return {
      id: uuid(),
      name: this.body.name,
      description: this.body.description,
      deadline: this.body.deadline,
      agreedDeadline: this.body.agreedDeadline,
      urgency: this.body.urgency,
      gravity: this.body.gravity,
      tendency: this.body.tendency,
      legalDemand: this.body.legalDemand,
    };
  }
}
