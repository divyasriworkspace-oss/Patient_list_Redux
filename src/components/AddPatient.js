import { useState } from "react";
import usePatient from "../hooks/usePatient";

const AddPatient = () => {
  const [name, setName] = useState("");

  const { addPatient } = usePatient();

  const handleSubmit = () => {
    if (!name.trim()) return;

    addPatient(name);
    setName("");
  };

  return (
    <div className="card">
      <h2>Add Patient</h2>

      <input
        type="text"
        placeholder="Enter Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="add-btn" onClick={handleSubmit}>
        Add Patient
      </button>
    </div>
  );
};

export default AddPatient;