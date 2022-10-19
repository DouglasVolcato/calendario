import axios from "axios";
import { useEffect, useState } from "react";

export function MainComponent() {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = async () => {
    const response: any = await axios.get("/api/values/view-all");
    setValues(response.data.rows);
  };

  const saveNumber = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios.post("/api/values", {
      value,
    });

    setValue("");
  };

  useEffect(() => {
    getAllNumbers()
  }, [value])

  return (
    <div>
      <button onClick={getAllNumbers}>Get all numbers</button>
      <br />
      <span>Values</span>
      <br />
      <div>
        {values.map((value) => (
          <div>{value}</div>
        ))}
      </div>
      <br />
      <form className="form" onSubmit={saveNumber}>
        <label>Enter your value</label>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
