import usePatient from "../hooks/usePatient";

// Component that renders the list of patients and provides delete controls.
const PatientList = () => {
    const { patients, deletePatient } = usePatient();

    return (
        <div className="card">
            {/* Summary / stats */}
            <div className="stats">
                Total Patients : {patients.length}
            </div>

            {/* Conditional rendering: empty state vs. mapped list */}
            {patients.length === 0 ? (
                <p className="empty">
                    No patients available
                </p>
            ) : (
                patients.map((patient, index) => (
                    // Use patient.id as the React key for stable identity
                    <div className="patient-item" key={patient.id}>
                        <div className="patient-info">
                            <div className="patient-number">
                                {index + 1}
                            </div>

                            <span>{patient.name}</span>
                        </div>


                        <button
                            className="delete-btn"
                            onClick={() =>
                                deletePatient(patient.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default PatientList;