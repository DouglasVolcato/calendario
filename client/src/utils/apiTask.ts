import { TaskInterface } from "../protocols/task-interface";

const baseUrl = "http://localhost:3002";

export const apiTask = {
  getAllTasks: async (
    areaName: string
  ): Promise<{ foundTasks: TaskInterface[] }> => {
    const response = await fetch(baseUrl + "/task/get-all-tasks/" + areaName, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data: { foundTasks: TaskInterface[] } = await response.json();
    return data;
  },

  createTask: async (
    areaName: string,
    taskBody: TaskInterface
  ): Promise<boolean> => {
    const response = await fetch(baseUrl + "/task/create-task/" + areaName, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(taskBody),
    });
    const data: boolean = await response.json();
    return data;
  },

  updateTask: async (
    areaName: string,
    taskBody: TaskInterface
  ): Promise<boolean> => {
    const response = await fetch(
      baseUrl + "/task/update-task/" + areaName + "/" + taskBody.id,
      {
        method: "PUT",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(taskBody),
      }
    );
    const data: boolean = await response.json();
    return data;
  },

  deleteTask: async (areaName: string, taskId: string): Promise<boolean> => {
    const response = await fetch(
      baseUrl + "/task/delete-task/" + areaName + "/" + taskId,
      {
        method: "Delete",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      }
    );
    const data: boolean = await response.json();
    return data;
  },
};
