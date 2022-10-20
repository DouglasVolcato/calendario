import { FormEventHandler, useState } from "react";
import { AreaInterface } from "../protocols/data/area-interface";
import "../styles/EditAreas.css";
import { AreaCard } from "./AreaCard";

interface Props {
  areas: AreaInterface[];
  deleteArea(araName: string): Promise<void>;
  editArea(areaName: string, newAreaName: string): Promise<void>;
  createArea(araName: string): Promise<void>;
}

export function EditAreas({ areas, deleteArea, editArea, createArea }: Props) {
  const [newArea, setNewArea] = useState<string>("");

  async function createitem(event: FormEventHandler | any) {
    event.preventDefault();
    await createArea(newArea);
    console.log(newArea);
    setNewArea("");
  }

  return (
    <div className="EditAreas">
      <form className="EditAreas-creationForm" onSubmit={createitem}>
        <input
          className="EditAreas-creationForm_input"
          type="text"
          placeholder="Nova área"
          value={newArea}
          onChange={(event) => setNewArea(event.target.value)}
        />
        <button className="EditAreas-creationForm_button">Adicionar</button>
      </form>

      <div className="EditAreas-list">
        {areas.map((area: AreaInterface, key: number) => (
          <AreaCard
            area={area}
            index={key}
            deleteArea={deleteArea}
            editArea={editArea}
          />
        ))}
      </div>
    </div>
  );
}
