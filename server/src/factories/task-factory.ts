import { Router } from "express";
import { TaskController } from "../controllers/task-controller";
import { TaskRepository } from "../database/repositories/task-repository";
import { RoutesInterface } from "../routes/protocols/routes-interface.ts";
import { TaskRoutes } from "../routes/task-routes";
import * as services from "../services/task";

export function makeTaskFactory(router: Router): RoutesInterface {
  const taskRepository = new TaskRepository();

  const createTaskUseCase = new services.CreateTaskUseCase(taskRepository);
  const deleteTaskUseCase = new services.DeleteTaskUseCase(taskRepository);
  const getAllTasksUseCase = new services.GetAllTasksUseCase(taskRepository);
  const getTaskUseCase = new services.GetTaskUseCase(taskRepository);
  const updateTaskUseCase = new services.UpdateTaskUseCase(taskRepository);

  const taskController = new TaskController({
    createTaskUseCase,
    deleteTaskUseCase,
    getAllTasksUseCase,
    getTaskUseCase,
    updateTaskUseCase,
  });

  const taskRoutes = new TaskRoutes(taskController, router);

  return taskRoutes;
}
