import { useSearchParams } from "react-router-dom";
import { AreaInterface } from "../protocols/area-interface";
import { TaskCards } from "./TaskCards";
import "../styles/Calendar.css";
import { TaskInterface } from "../protocols/task-interface";

interface Props {
  areas: AreaInterface[];
  updateTask(areaName: string, taskBody: TaskInterface): void;
}

export function Calendar({ areas, updateTask }: Props) {
  const [searchParams] = useSearchParams();
  const selectedAreaName: string | null = searchParams.get("area");
  const from: string | null = searchParams.get("from");
  const to: string | null = searchParams.get("to");

  const selectedArea: AreaInterface[] =
    selectedAreaName !== "unset"
      ? areas.filter((area) => area.name === selectedAreaName)
      : areas;

  const months: {
    name: string;
    number: number;
  }[] = [
    { name: "", number: 0 },
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

  function colorAreas(index: number): string {
    if (index % 2 === 0) {
      return "Calendar-areas";
    } else {
      return "Calendar-areas colored";
    }
  }

  return (
    <div className="Calendar">
      {months.map((month, key) => (
        <div key={key} className={`month-${month.number}`}>
          {month.name}
        </div>
      ))}
      {selectedArea.map((area: AreaInterface, index) => (
        <div key={index} className={colorAreas(index)}>
          {months.map((item, index) => (
            <div>
              <TaskCards
                key={index}
                area={area}
                index={index}
                from={from}
                to={to}
                updateTask={updateTask}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
