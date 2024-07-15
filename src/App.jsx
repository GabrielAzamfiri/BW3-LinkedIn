import "bootstrap/dist/css/bootstrap.min.css";
import Analisi from "../components/Analisi";
import Risorse from "../components/Risorse";
import "./App.css";
import Corsi from "../components/Corsi";
import Progetti from "../components/Progetti";

function App() {
  return (
    <>
      <Analisi />
      <Risorse />
      <Corsi />
      <Progetti />
    </>
  );
}

export default App;
