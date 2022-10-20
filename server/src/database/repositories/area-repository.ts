import { calendar } from "../mocks/calendar";
import { AreaInterface } from "../protocols/data/area-interface";
import { AreaRepositoryInterface } from "../protocols/repositories/area-repository-interface";

export class AreaRepository implements AreaRepositoryInterface {
  async createArea(areaBody: AreaInterface): Promise<boolean> {
    await calendar.push(areaBody);
    return true;
  }

  async getArea(name: string): Promise<AreaInterface | undefined> {
    const foundArea = await calendar.find(
      (element: AreaInterface) => element.name === name
    );
    if (foundArea) {
      return foundArea;
    } else {
      return undefined;
    }
  }

  async getAllAreas(): Promise<AreaInterface[]> {
    return await calendar;
  }

  async updateArea(name: string, areaBody: AreaInterface): Promise<boolean> {
    const foundArea: AreaInterface[] = [];
    await calendar.map((element: AreaInterface, index: number) => {
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
    const foundArea: AreaInterface[] = [];
    await calendar.map((element: AreaInterface, index: number) => {
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
