import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { EditAreas } from "./EditAreas";
import "../styles/App.css";
import { apiArea } from "../utils/api";
import { useEffect, useState } from "react";
import { AreaInterface } from "../protocols/data/area-interface";
import { Tasks } from "./Tasks";
import { Calendar } from "./Calendar";
import { apiTask } from "../utils/apiTask";
import { TaskInterface } from "../protocols/data/task-interface";

function App() {
  const [areas, setAreas] = useState<AreaInterface[]>([]);

  async function getAreas() {
    const foundAreas: { foundAreas: AreaInterface[] } =
      await apiArea.getAllAreas();
    setAreas(foundAreas.foundAreas);
  }

  async function deleteArea(areaName: string) {
    const deleted: boolean = await apiArea.deleteArea(areaName);
    setAreas(() => areas.filter((area) => area.name !== areaName));
  }

  async function editArea(areaName: string, newAreaName: string) {
    const edited: boolean = await apiArea.editAreaName(areaName, newAreaName);
    const newAreas = areas;
    newAreas.map((area, index) => {
      if (area.name === areaName) {
        newAreas.splice(index, 1, Object.assign(area, { name: newAreaName }));
      }
    });
    setAreas(newAreas);
  }

  async function createArea(areaName: string) {
    const created = await apiArea.createArea(areaName);
    setAreas([...areas, { name: areaName, tasks: [] }]);
  }

  async function createTask(areaName: string, taskBody: TaskInterface) {
    const created = await apiTask.createTask(areaName, taskBody);
    areas.map((area) => {
      if (area.name === areaName) {
        area.tasks.push(taskBody);
      }
    });
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
          <Route path="/path=calendar" element={<Calendar areas={areas} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
