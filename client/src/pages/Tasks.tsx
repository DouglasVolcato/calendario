import { AreaInterface } from "../protocols/area-interface";
import { TaskInterface } from "../protocols/task-interface";
import { CreateTask } from "./CreateTask";
import { SearchTasks } from "./SearchTasks";

interface Props {
  areas: AreaInterface[];
  createTask(areaName: string, taskBody: TaskInterface): void;
}

export function Tasks({ areas, createTask }: Props) {
  return (
    <div className="Task">
      <SearchTasks areas={areas} />
      <CreateTask areas={areas} createTask={createTask} />
    </div>
  );
}
