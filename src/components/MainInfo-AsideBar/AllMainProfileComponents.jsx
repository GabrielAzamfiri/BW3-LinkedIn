import MainProfile from "./MainProfile";
import Risorse from "../bodydata/Risorse";
import Progetti from "../bodydata/Progetti";
import Footer from "../bodydata/Footer";
import Esperienze from "../bodydata/Esperienza";
import Analisi from "../bodydata/Analisi";
import Corsi from "../bodydata/Corsi";

const AllMainProfileComponents = () => {
  return (
    <>
      <MainProfile />
      <Esperienze />
      <Analisi />
      <Risorse />
      <Corsi />
      <Progetti />
      <Footer />
    </>
  );
};

export default AllMainProfileComponents;
