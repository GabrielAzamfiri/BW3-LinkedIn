import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Analisi from "../components/Analisi";
import Risorse from "../components/Risorse";
import Corsi from "../components/Corsi";
import Progetti from "../components/Progetti";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Analisi />
      <Risorse />
      <Corsi />
      <Progetti />
      <Footer />
    </>
  );
}

export default App;
