import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { EditAreas } from "./EditAreas";
import { apiArea } from "../utils/apiArea";
import { useEffect, useState } from "react";
import { AreaInterface } from "../protocols/area-interface";
import { Tasks } from "./Tasks";
import { Calendar } from "./Calendar";
import { apiTask } from "../utils/apiTask";
import { TaskInterface } from "../protocols/task-interface";
import "../styles/App.css";
import NotFound from "./NotFound";

function App() {
  const [areas, setAreas] = useState<AreaInterface[]>([]);

  async function getAreas(): Promise<void> {
    const foundAreas: { foundAreas: AreaInterface[] } =
      await apiArea.getAllAreas();
    setAreas(foundAreas.foundAreas);
  }

  async function deleteArea(areaName: string): Promise<void> {
    await apiArea.deleteArea(areaName);
    setAreas(() => areas.filter((area) => area.name !== areaName));
    setTimeout(() => getAreas(), 3000);
  }

  async function editArea(
    areaName: string,
    newAreaName: string
  ): Promise<void> {
    await apiArea.editAreaName(areaName, newAreaName);
    const newAreas = areas;
    newAreas.map((area, index) => {
      if (area.name === areaName) {
        newAreas.splice(index, 1, Object.assign(area, { name: newAreaName }));
      }
    });
    setAreas(newAreas);
    getAreas();
  }

  async function createArea(areaName: string): Promise<void> {
    await apiArea.createArea(areaName);
    setAreas([...areas, { name: areaName, tasks: [] }]);
    getAreas();
  }

  async function createTask(
    areaName: string,
    taskBody: TaskInterface
  ): Promise<void> {
    await apiTask.createTask(areaName, taskBody);
    areas.map((area) => {
      if (area.name === areaName) {
        area.tasks.push(taskBody);
      }
    });
    setTimeout(() => getAreas(), 3000);
  }

  async function updateTask(
    areaName: string,
    taskBody: TaskInterface
  ): Promise<void> {
    await apiTask.updateTask(areaName, taskBody);
    setTimeout(() => getAreas(), 3000);
  }

  useEffect(() => {
    getAreas();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="Body">
        <Routes>
          <Route
            path="/"
            element={<Tasks areas={areas} createTask={createTask} />}
          />
          <Route
            path="/path=areas"
            element={
              <EditAreas
                areas={areas}
                deleteArea={deleteArea}
                editArea={editArea}
                createArea={createArea}
              />
            }
          />
          <Route
            path="/path=calendar"
            element={<Calendar areas={areas} updateTask={updateTask} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
