import { AreaInterface } from "../protocols/area-interface";

const baseUrl = "http://localhost:3002";

export const apiArea = {
  getAllAreas: async (): Promise<{ foundAreas: AreaInterface[] }> => {
    const response = await fetch(baseUrl + "/area/get-all-areas", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },

  deleteArea: async (areaName: string): Promise<boolean> => {
    const response = await fetch(baseUrl + "/area/delete-area/" + areaName, {
      method: "DELETE",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },

  editAreaName: async (
    areaName: string,
    newAreaName: string
  ): Promise<boolean> => {
    const response = await fetch(baseUrl + "/area/update-area/" + areaName, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: newAreaName }),
    });
    const data = await response.json();
    return data;
  },

  createArea: async (areaName: string): Promise<boolean> => {
    const response = await fetch(baseUrl + "/area/create-area", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: areaName }),
    });
    const data = await response.json();
    return data;
  },
};
