export const ADD_PATIENT = "ADD_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

export const addPatient = (patient) => ({
  type: ADD_PATIENT,
  payload: patient,
});

export const deletePatient = (id) => ({
  type: DELETE_PATIENT,
  payload: id,
});