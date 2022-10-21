import { AreaInterface } from "../protocols/area-interface";
import { TaskInterface } from "../protocols/task-interface";
import "../styles/TaskCards.css";
import { TaskCard } from "./TaskCard";

interface Props {
  area: AreaInterface;
  index: number;
  from: string | null;
  to: string | null;
  updateTask(areaName: string, taskBody: TaskInterface): void;
}

export function TaskCards({ area, index, from, to, updateTask }: Props) {
  const taskList: TaskInterface[] = [];

  area.tasks.filter((task) => {
    const month = task.deadline.split("-")[1];
    if (month === index.toString() || month === "0" + index.toString()) {
      if (Number(month) >= Number(from) && Number(month) <= Number(to))
        return taskList.push(task);
    }
  });

  return (
    <div className="TaskCards">
      {index === 0 ? <div className="TaskCards-area">{area.name}</div> : <></>}
      {taskList.map((task) => (
        <div className="TaskCards-task">
          <TaskCard task={task} area={area.name} updateTask={updateTask} />
        </div>
      ))}
    </div>
  );
}
