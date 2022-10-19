import { calendar } from "../mocks/calendar";
import { Area } from "../protocols/data/area-interface";
import { AreaRepositoryInterface } from "../protocols/repositories/area-repository-interface";

export class AreaRepository implements AreaRepositoryInterface {
  async createArea(areaBody: Area): Promise<boolean> {
    await calendar.push(areaBody);
    return true;
  }

  async getArea(name: string): Promise<Area | undefined> {
    const foundArea = await calendar.find((element) => element.name === name);
    if (foundArea) {
      return foundArea;
    } else {
      return undefined;
    }
  }

  async getAllAreas(): Promise<Area[]> {
    return await calendar;
  }

  async updateArea(name: string, areaBody: Area): Promise<boolean> {
    const foundArea: Area[] = [];
    await calendar.map((element, index) => {
      if (element.name === name) {
        foundArea.push(element);
        calendar.splice(index, 1, areaBody);
      }
    });
    if (foundArea.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  async deleteArea(name: string): Promise<boolean> {
    const foundArea: Area[] = [];
    await calendar.map((element, index) => {
      if (element.name === name) {
        foundArea.push(element);
        calendar.splice(index, 1);
      }
    });
    if (foundArea.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
