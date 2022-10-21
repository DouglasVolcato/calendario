import { FormEventHandler, useState } from "react";
import { AreaInterface } from "../protocols/area-interface";
import "../styles/AreaCard.css";

interface Props {
  key: number;
  area: AreaInterface;
  index: number;
  deleteArea(araName: string): Promise<void>;
  editArea(areaName: string, newAreaName: string): Promise<void>;
}

export function AreaCard({ area, index, deleteArea, editArea }: Props) {
  const [editionForm, setEditionForm] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(area.name);

  async function deleteItem() {
    await deleteArea(area.name);
    setEditionForm(false);
  }

  async function editItem(event: FormEventHandler | any) {
    event.preventDefault();
    await editArea(area.name, newName);
    setEditionForm(false);
  }

  return (
    <div className="AreaCard">
      {editionForm ? (
        <form onSubmit={editItem}>
          <input
            className="AreaCard-name"
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
          <div className="AreaCard-buttons">
            <button type="submit">Enviar</button>
            <button type="button" onClick={() => setEditionForm(false)}>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="AreaCard-name">
            #{index + 1}: {area.name}
          </div>
          <div className="AreaCard-buttons">
            <button onClick={() => setEditionForm(true)}>Editar Nome</button>
            <button onClick={deleteItem}>Deletar</button>
          </div>
        </>
      )}
    </div>
  );
}
