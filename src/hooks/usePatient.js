// Custom React hook that encapsulates patient-related state and actions.
// This keeps component code smaller and centralizes logic for adding/deleting patients via Redux.
import { useDispatch, useSelector } from "react-redux";
import { addPatient, deletePatient } from "../redux/patientSlice";

const usePatient = () => {
  // Read the patients array from Redux state.
  const patients = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  // Create and dispatch an action to add a patient. We generate a simple unique id using Date.now();
  const handleAddPatient = (name) => {
    dispatch(addPatient({ id: Date.now(), name }));
  };

  // Dispatch delete action by id.
  const handleDeletePatient = (id) => {
    dispatch(deletePatient(id));
  };

  return {
    patients,
    addPatient: handleAddPatient,
    deletePatient: handleDeletePatient,
  };
};

export default usePatient;