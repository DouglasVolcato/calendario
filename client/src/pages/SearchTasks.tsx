import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AreaInterface } from "../protocols/area-interface";
import "../styles/SearchTasks.css";

interface Props {
  areas: AreaInterface[];
}

interface Months {
  month1: number;
  month2: number;
}

export function SearchTasks({ areas }: Props) {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<string>("unset");
  const [selectedMonths, setSelectedMonths] = useState<Months>({
    month1: 1,
    month2: 12,
  });
  const months = [
    { name: "Janeiro", number: 1 },
    { name: "Fevereito", number: 2 },
    { name: "Março", number: 3 },
    { name: "Abril", number: 4 },
    { name: "Maio", number: 5 },
    { name: "Junho", number: 6 },
    { name: "Julho", number: 7 },
    { name: "Agosto", number: 8 },
    { name: "Setembro", number: 9 },
    { name: "Outubro", number: 10 },
    { name: "Novembro", number: 11 },
    { name: "Dezembro", number: 12 },
  ];

  function handleSubmit(event: FormEventHandler | any) {
    event.preventDefault();
    navigate(
      `/path=calendar?area=${selectedArea}&from=${selectedMonths.month1}&to=${selectedMonths.month2}`
    );
  }

  return (
    <div className="SearchTasks">
      <form className="SearchTasks-form" onSubmit={handleSubmit}>
        <label>Buscar tarefas por área</label>
        <br />
        <select
          className="SearchTasks-form_select"
          defaultValue={""}
          onChange={(event) => setSelectedArea(event.target.value)}
        >
          <option value="">Selecione</option>
          {areas.map((area) => (
            <option value={area.name}>{area.name}</option>
          ))}
        </select>
        <br />

        <label>Período</label>
        <br />
        <div className="SearchTasks-form_divSelectFields">
          <select
            className="SearchTasks-form_select"
            onChange={(event) =>
              setSelectedMonths({
                ...selectedMonths,
                month1: Number(event.target.value),
              })
            }
          >
            <option value={0}>Selecione</option>
            {months.map((month) => (
              <option value={month.number}>{month.name}</option>
            ))}
          </select>
          <label>à</label>
          <select
            className="SearchTasks-form_select"
            onChange={(event) =>
              setSelectedMonths({
                ...selectedMonths,
                month2: Number(event.target.value),
              })
            }
          >
            <option value={0}>Selecione</option>
            {months.map((month) => (
              <option value={month.number}>{month.name}</option>
            ))}
          </select>
        </div>
        <br />
        <button className="SearchTasks-form_button" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
