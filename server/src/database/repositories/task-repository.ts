import { calendar } from "../mocks/calendar";
import { Area } from "../protocols/data/area-interface";
import { Task } from "../protocols/data/task-interface";
import { TaskRepositoryInterface } from "../protocols/repositories/task-repository-interface";

export class TaskRepository implements TaskRepositoryInterface {
  async createTask(areaName: string, taskBody: Task): Promise<boolean> {
    const foundArea: Area[] = [];
    await calendar.map((area) => {
      if (area.name === areaName) {
        foundArea.push(area);
        area.tasks.push(taskBody);
      }
    });
    if (foundArea.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async getTask(areaName: string, taskId: number): Promise<Task | undefined> {
    const foundArea = await calendar.find(
      (element) => element.name === areaName
    );
    if (foundArea) {
      const foundTask = await foundArea.tasks.find(
        (element) => element.id === taskId
      );
      if (foundTask) {
        return foundTask;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  async getAllTasks(areaName: string): Promise<Task[] | undefined> {
    const foundArea = await calendar.find(
      (element) => element.name === areaName
    );
    if (foundArea) {
      if (foundArea.tasks) {
        return foundArea.tasks;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  async updateTask(
    areaName: string,
    taskId: number,
    taskBody: Task
  ): Promise<boolean> {
    const foundArea: Area[] = [];
    const foundTask: Task[] = [];
    await calendar.map((area, areaIndex) => {
      if (area.name === areaName) {
        foundArea.push(area);
        area.tasks.map((task, taskIndex) => {
          if (task.id === taskId) {
            foundTask.push(task);
            calendar[areaIndex].tasks.splice(taskIndex, 1, taskBody);
          }
        });
      }
    });
    if (foundArea.length !== 0 && foundTask.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async deleteTask(areaName: string, taskId: number): Promise<boolean> {
    const foundArea: Area[] = [];
    const foundTask: Task[] = [];
    await calendar.map((area, areaIndex) => {
      if (area.name === areaName) {
        foundArea.push(area);
        area.tasks.map((task, taskIndex) => {
          if (task.id === taskId) {
            foundTask.push(task);
            calendar[areaIndex].tasks.splice(taskIndex, 1);
          }
        });
      }
    });
    if (foundArea.length !== 0 && foundTask.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
