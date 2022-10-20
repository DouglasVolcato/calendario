import { MissingParamError } from "../../controllers/helpers/errors/missingParam-error";
import { TaskInterface } from "../protocols/data/task-interface";
import { Entity } from "../protocols/entities/entity-interface";
import { v4 as uuid } from "uuid";

export class Task implements Entity {
  body: TaskInterface;

  constructor(body: TaskInterface) {
    this.body = body;
  }

  validate(): void {
    if (!this.body.name || !this.body.description) {
      throw new MissingParamError("name");
    }
  }

  getBody(): TaskInterface {
    return {
      id: uuid(),
      name: this.body.name,
      description: this.body.description,
      deadline: this.body.deadline || new Date().toISOString().split("T")[0],
      agreedDeadline:
        this.body.agreedDeadline || new Date().toISOString().split("T")[0],
      urgency: this.body.urgency ?? "Pode esperar",
      gravity: this.body.gravity ?? "Sem gravidade",
      tendency: this.body.tendency ?? "Não irá mudar",
      legalDemand: this.body.legalDemand ?? false,
    };
  }
}
