import { Router } from "express";

export interface RoutesInterface {
  route(): Router;
}
