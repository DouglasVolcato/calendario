import { FormEventHandler, useState } from "react";
import { TaskInterface } from "../protocols/task-interface";
import "../styles/TaskEditionModal.css";
import { apiTask } from "../utils/apiTask";

interface Props {
  task: TaskInterface;
  area: string;
  setEditionModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateTask(areaName: string, taskBody: TaskInterface): void;
}

export function TaskEditionModal({
  task,
  area,
  setEditionModal,
  updateTask,
}: Props) {
  const [updatedTask, setUpdatedTask] = useState({
    area: area,
    name: task.name,
    description: task.description,
    deadline: task.deadline,
    agreedDeadline: task.agreedDeadline,
    urgency: task.urgency,
    gravity: task.gravity,
    tendency: task.tendency,
    legalDemand: task.legalDemand,
  });

  const gravity = [
    "Sem gravidade",
    "Pouco grave",
    "Grave",
    "Muito grave",
    "Extremamente grave",
  ];
  const urgency = [
    "Pode experar",
    "Pouco urgente",
    "Merece atenção, curto prazo",
    "Muito urgente",
    "Precisa de ação imediata",
  ];
  const tendency = [
    "Não irá mudar",
    "Piora em longo prazo",
    "Piora em médio prazo",
    "Piora em curto prazo",
    "Piora rapidamente",
  ];

  async function updateItem(event: FormEventHandler | any) {
    event.preventDefault();
    await updateTask(area, {
      id: task.id,
      name: updatedTask.name,
      description: updatedTask.description,
      deadline: updatedTask.deadline,
      agreedDeadline: updatedTask.agreedDeadline,
      urgency: updatedTask.urgency,
      gravity: updatedTask.gravity,
      tendency: updatedTask.tendency,
      legalDemand: updatedTask.legalDemand,
    });
    window.location.reload();
  }

  async function deleteItem() {
    if (task.id) {
      await apiTask.deleteTask(area, task.id);
      window.location.reload();
    }
  }

  return (
    <div className="TaskEditionModal">
      <form className="TaskEditionModal-form" onSubmit={updateItem}>
        <label>{task.name}</label>
        <br /> <br />
        <textarea
          value={updatedTask.description}
          rows={10}
          className="CreateTask-form_input"
          placeholder="Descrição"
          required={true}
          onChange={(event) =>
            setUpdatedTask({ ...updatedTask, description: event.target.value })
          }
        />
        <br />
        <div className="CreateTask-form_data">
          <label>Prazo legal</label>
          <input
            value={updatedTask.deadline}
            type="date"
            onChange={(event) =>
              setUpdatedTask({ ...updatedTask, deadline: event.target.value })
            }
          />
        </div>
        <div className="CreateTask-form_data">
          <label>Prazo acordado</label>
          <input
            value={updatedTask.agreedDeadline}
            type="date"
            onChange={(event) =>
              setUpdatedTask({
                ...updatedTask,
                agreedDeadline: event.target.value,
              })
            }
          />
        </div>
        <br />
        <select
          value={updatedTask.gravity}
          className="CreateTask-form_select"
          onChange={(event) =>
            setUpdatedTask({ ...updatedTask, gravity: event.target.value })
          }
        >
          <option value={updatedTask.gravity}>{updatedTask.gravity}</option>
          {gravity.map((word) => (
            <option value={word}>{word}</option>
          ))}
        </select>
        <br />
        <select
          value={updatedTask.urgency}
          className="CreateTask-form_select"
          onChange={(event) =>
            setUpdatedTask({ ...updatedTask, urgency: event.target.value })
          }
        >
          <option value={updatedTask.urgency}>{updatedTask.urgency}</option>
          {urgency.map((word) => (
            <option value={word}>{word}</option>
          ))}
        </select>
        <br />
        <select
          className="CreateTask-form_select"
          onChange={(event) =>
            setUpdatedTask({ ...updatedTask, tendency: event.target.value })
          }
        >
          <option value={updatedTask.tendency}>{updatedTask.tendency}</option>
          {tendency.map((word) => (
            <option value={word}>{word}</option>
          ))}
        </select>
        <br />
        <div className="CreateTask-form_checkBox">
          <input
            checked={updatedTask.legalDemand}
            type="checkbox"
            onChange={(event) =>
              setUpdatedTask({
                ...updatedTask,
                legalDemand: event.target.checked,
              })
            }
          />
          <label>Demanda legal</label>
        </div>
        <button type="submit" className="CreateTask-form_button">
          Atualizar
        </button>
        <button
          type="button"
          className="CreateTask-form_button"
          onClick={() => deleteItem()}
        >
          Deletar
        </button>
        <br />
        <button
          type="button"
          className="CreateTask-form_button"
          onClick={() => setEditionModal(false)}
        >
          Fechar
        </button>
      </form>
    </div>
  );
}
