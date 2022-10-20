import { AreaInterface } from "../data/area-interface";
import { TaskInterface } from "../data/task-interface";

export interface Entity {
  validate(): void;
  getBody(): AreaInterface | TaskInterface;
}
