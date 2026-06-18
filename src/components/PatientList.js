import usePatient from "../hooks/usePatient";

const PatientList = () => {
    const { patients, deletePatient } = usePatient();

    return (
        <div className="card">
            <div className="stats">
                Total Patients : {patients.length}
            </div>

            {patients.length === 0 ? (
                <p className="empty">
                    No patients available
                </p>
            ) : (
                patients.map((patient, index) => (
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