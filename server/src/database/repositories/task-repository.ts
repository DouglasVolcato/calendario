import { calendar } from "../mocks/calendar";
import { AreaInterface } from "../protocols/data/area-interface";
import { TaskInterface } from "../protocols/data/task-interface";
import { TaskRepositoryInterface } from "../protocols/repositories/task-repository-interface";

export class TaskRepository implements TaskRepositoryInterface {
  async createTask(
    taskName: string,
    taskBody: TaskInterface
  ): Promise<boolean> {
    const foundArea: AreaInterface[] = [];
    await calendar.map((area) => {
      if (area.name === taskName) {
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

  async getTask(
    taskName: string,
    taskId: string
  ): Promise<TaskInterface | undefined> {
    const foundArea = await calendar.find(
      (element) => element.name === taskName
    );
    if (foundArea) {
      const foundTask = await foundArea.tasks.find(
        (element: TaskInterface) => element.id === taskId
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

  async getAllTasks(taskName: string): Promise<TaskInterface[] | undefined> {
    const foundArea = await calendar.find(
      (element) => element.name === taskName
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
    taskName: string,
    taskId: string,
    taskBody: TaskInterface
  ): Promise<boolean> {
    const foundArea: AreaInterface[] = [];
    const foundTask: TaskInterface[] = [];
    await calendar.map((area, areaIndex) => {
      if (area.name === taskName) {
        foundArea.push(area);
        area.tasks.map((task: TaskInterface, taskIndex: number) => {
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

  async deleteTask(taskName: string, taskId: string): Promise<boolean> {
    const foundArea: AreaInterface[] = [];
    const foundTask: TaskInterface[] = [];
    await calendar.map((area, areaIndex) => {
      if (area.name === taskName) {
        foundArea.push(area);
        area.tasks.map((task: TaskInterface, taskIndex: number) => {
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
