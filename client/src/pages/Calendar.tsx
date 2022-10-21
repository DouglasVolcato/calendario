import { useSearchParams } from "react-router-dom";
import { AreaInterface } from "../protocols/data/area-interface";

interface Props {
  areas: AreaInterface[];
}

export function Calendar({ areas }: Props) {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  //   const foundArea = areas.find(
  //     (area) => area.name === searchParams.get("area")
  //   );

  const areaTasks = areas.find(
    (area) => area.name === searchParams.get("area")
  )?.tasks;
  const allTasks = [];

  const foundArea = searchParams.get("area") !== "unset" ? areaTasks : [];

  return (
    <div className="Calendar">
      <p>{searchParams.get("area")}</p>
      {foundArea?.map((task) => (
        <div>{task.name}</div>
      ))}
    </div>
  );
}
