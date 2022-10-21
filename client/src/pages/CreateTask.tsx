import { FormEventHandler, useState } from "react";
import { AreaInterface } from "../protocols/area-interface";
import { TaskInterface } from "../protocols/task-interface";
import "../styles/CreateTask.css";

interface Props {
  areas: AreaInterface[];
  createTask(areaName: string, taskBody: TaskInterface): void;
}

interface StateHandler {
  area: string;
  name: string;
  description: string;
  deadline: string;
  agreedDeadline: string;
  urgency: string;
  gravity: string;
  tendency: string;
  legalDemand: boolean;
}

export function CreateTask({ areas, createTask }: Props) {
  const [newTask, setNewTask] = useState<StateHandler>({
    area: "",
    name: "",
    description: "",
    deadline: "",
    agreedDeadline: "",
    urgency: "",
    gravity: "",
    tendency: "",
    legalDemand: false,
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

  async function createItem(event: FormEventHandler | any): Promise<void> {
    event.preventDefault();
    await createTask(newTask.area, {
      name: newTask.name,
      description: newTask.description,
      deadline: newTask.deadline,
      agreedDeadline: newTask.agreedDeadline,
      urgency: newTask.urgency,
      gravity: newTask.gravity,
      tendency: newTask.tendency,
      legalDemand: newTask.legalDemand,
    });
  }

  return (
    <div className="CreateTask">
      <form className="CreateTask-form" onSubmit={createItem}>
        <label>Cadastrar tarefa</label>
        <br />
        <select
          className="CreateTask-form_select"
          required={true}
          onChange={(event) =>
            setNewTask({ ...newTask, area: event.target.value })
          }
        >
          <option value={"null"}>Selecione uma área</option>
          {areas.map((area: AreaInterface, key) => (
            <option key={key} className={"area-option" + key} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>
        <br />
        <input
          required={true}
          className="CreateTask-form_input"
          type="text"
          placeholder="Nome"
          onChange={(event) =>
            setNewTask({ ...newTask, name: event.target.value })
          }
        />
        <br />
        <textarea
          rows={10}
          className="CreateTask-form_input"
          placeholder="Descrição"
          required={true}
          onChange={(event) =>
            setNewTask({ ...newTask, description: event.target.value })
          }
        />
        <br />
        <div className="CreateTask-form_data">
          <label>Prazo legal</label>
          <input
            type="date"
            onChange={(event) =>
              setNewTask({ ...newTask, deadline: event.target.value })
            }
          />
        </div>
        <br />
        <div className="CreateTask-form_data">
          <label>Prazo acordado</label>
          <input
            type="date"
            onChange={(event) =>
              setNewTask({ ...newTask, agreedDeadline: event.target.value })
            }
          />
        </div>
        <br />
        <select
          className="CreateTask-form_select"
          onChange={(event) =>
            setNewTask({ ...newTask, gravity: event.target.value })
          }
        >
          <option value="null">Gravidade</option>
          {gravity.map((word: string, key) => (
            <option key={key} className={"gravity-option" + key} value={word}>
              {word}
            </option>
          ))}
        </select>
        <br />
        <select
          className="CreateTask-form_select"
          onChange={(event) =>
            setNewTask({ ...newTask, urgency: event.target.value })
          }
        >
          <option value="null">Urgência</option>
          {urgency.map((word: string, key) => (
            <option key={key} className={"urgency-option" + key} value={word}>
              {word}
            </option>
          ))}
        </select>
        <br />
        <select
          className="CreateTask-form_select"
          onChange={(event) =>
            setNewTask({ ...newTask, tendency: event.target.value })
          }
        >
          <option value="null">Tendência</option>
          {tendency.map((word: string, key) => (
            <option key={key} className={"tendency-option" + key} value={word}>
              {word}
            </option>
          ))}
        </select>
        <br />
        <div className="CreateTask-form_checkBox">
          <input
            type="checkbox"
            onChange={(event) =>
              setNewTask({ ...newTask, legalDemand: event.target.checked })
            }
          />
          <label>Demanda legal</label>
        </div>
        <br />
        <button type="submit" className="CreateTask-form_button">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
