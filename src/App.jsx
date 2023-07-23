import "./App.css";
import Brigada from "./components/UI/Brigada/Brigada";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/UI/Header/Header";
import Gathering from "./components/Gathering/Gathering";
import HowItWorks from "./components/UI/HowItWorks/HowItWorks";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import DonateModal from "./components/UI/DonateModal/DonateModal";
import ThanksModal from "./components/UI/ThanksModal/ThanksModal";
import Report from "./components/UI/Report/Report";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThanks, setisThanks] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    setisThanks(false);
  };

  const toggleThanks = () => {
    setisThanks((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Brigada modal={toggleModal} />
      <HowItWorks modal={toggleModal} />
      <Gathering />
      <Report />
      <Footer />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          {isThanks && (
            <ThanksModal modal={toggleModal} thanks={toggleThanks} />
          )}
          {!isThanks && <DonateModal isThanks={toggleThanks} />}
        </Modal>
      )}
    </>
  );
}

export default App;
