import { useState } from "react";
import { TaskInterface } from "../protocols/task-interface";
import "../styles/TaskCard.css";
import { TaskEditionModal } from "./TaskEditionModal";

interface Props {
  task: TaskInterface;
  area: string;
  updateTask(areaName: string, taskBody: TaskInterface): void;
}

export function TaskCard({ task, area, updateTask }: Props) {
  const [editionModal, setEditionModal] = useState<boolean>(false);

  function setPriority() {
    if (
      task.gravity === "Muito grave" ||
      task.gravity === "Extremamente grave" ||
      task.urgency === "Muito urgente" ||
      task.urgency === "Precisa de ação imediata" ||
      task.tendency === "Piora em curto prazo" ||
      task.tendency === "Piora rapidamente"
    ) {
      return "TaskCard prioriry";
    } else {
      return "TaskCard";
    }
  }

  return (
    <div className={setPriority()}>
      <p className="TaskCard-name">{task.name}</p>
      <p className="TaskCard-description">{task.description}</p>
      <button className="TaskCard-button" onClick={() => setEditionModal(true)}>
        +
      </button>
      {editionModal ? (
        <TaskEditionModal
          task={task}
          area={area}
          setEditionModal={setEditionModal}
          updateTask={updateTask}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
