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

    const deadline = newTask.deadline.split("-");
    const agreedDeadline = newTask.agreedDeadline.split("-");
    const currentDate = new Date().toISOString().split("T")[0].split("-");

    const urgencyTest =
      newTask.urgency === "" || newTask.urgency === "null" ? true : false;
    const tendencyTest =
      newTask.tendency === "" || newTask.tendency === "null" ? true : false;
    const gravityTest =
      newTask.gravity === "" || newTask.gravity === "null" ? true : false;

    if (
      deadline[0] === "" ||
      agreedDeadline[0] === "" ||
      deadline[0] !== agreedDeadline[0] ||
      agreedDeadline[0] !== currentDate[0] ||
      Number(currentDate[1]) > Number(deadline[1]) ||
      Number(agreedDeadline[1]) < Number(currentDate[1])
    ) {
      alert(
        "O prazo acordado e o prazo legal devem estar entre a data atual e o último dia do ano corrente."
      );
    } else if (deadline[1] === currentDate[1] && deadline[2] < currentDate[2]) {
      alert(
        "O prazo acordado e o prazo legal devem estar entre a data atual e o último dia do ano corrente."
      );
    } else if (
      agreedDeadline[1] === currentDate[1] &&
      agreedDeadline[2] < currentDate[2]
    ) {
      alert(
        "O prazo acordado e o prazo legal devem estar entre a data atual e o último dia do ano corrente."
      );
    } else if (
      newTask.area === "" ||
      newTask.area === "null" ||
      !newTask.name ||
      !newTask.description
    ) {
      alert("Preencha área, nome, descrição, datas e um dos itens da GUT.");
    } else if (urgencyTest && tendencyTest && gravityTest) {
      alert("Preencha, pelo menos, Gravidade, Urgência ou Tendência.");
    } else {
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
      alert("Tarefa criada");
    }
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
