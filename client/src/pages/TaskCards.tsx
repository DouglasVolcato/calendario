import { AreaInterface } from "../protocols/data/area-interface";
import { TaskInterface } from "../protocols/data/task-interface";
import "../styles/TaskCards.css";

interface Props {
  area: AreaInterface;
  index: number;
  from: string | null;
  to: string | null;
}

export function TaskCards({ area, index, from, to }: Props) {
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
        <div className="TaskCards-task">{task.name}</div>
      ))}
    </div>
  );
}
