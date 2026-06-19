import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";
import "./App.css";

// Root app component: composes the add form and list components.
function App() {
  return (
    <div className="container">
      <h1>🏥 Patient Management System</h1>

      {/* Form to add patients */}
      <AddPatient />

      {/* List of patients with delete controls */}
      <PatientList />

      <div className="footer">
        Redux + Custom Hook Demo
      </div>
    </div>
  );
}

export default App;