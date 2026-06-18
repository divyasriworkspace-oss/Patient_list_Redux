import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🏥 Patient Management System</h1>

      <AddPatient />
      <PatientList />
      <div className="footer">
        Redux + Custom Hook Demo
      </div>
    </div>
  );
}

export default App;