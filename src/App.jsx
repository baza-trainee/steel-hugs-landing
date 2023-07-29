import "./App.css";
import Brigada from "./components/UI/Brigada/Brigada";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/UI/Header/Header";
import Gathering from "./components/Gathering/Gathering";
import HowItWorks from "./components/UI/HowItWorks/HowItWorks";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import ThanksModal from "./components/UI/ThanksModal/ThanksModal";
// import Report from "./components/UI/Report/Report";
import Goal from "./components/UI/Goal/Goal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleThanks = () => {
    setisThanks((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Goal modal={toggleModal} />
      <Brigada modal={toggleModal} />
      <HowItWorks modal={toggleModal} />
      <Gathering />
      <Footer />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
            <ThanksModal modal={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
