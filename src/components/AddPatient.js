import { useState } from "react";
import usePatient from "../hooks/usePatient";

// Component responsible for adding a new patient.
// Uses the `usePatient` hook to dispatch add actions to Redux.
const AddPatient = () => {
  // Local controlled input state for the new patient's name.
  const [name, setName] = useState("");

  const { addPatient } = usePatient();

  // Validate and submit the new patient name to the store.
  const handleSubmit = () => {
    if (!name.trim()) return; // ignore empty submissions

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