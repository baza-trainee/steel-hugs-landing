import "./App.css";
import Brigada from "./components/UI/Brigada/Brigada";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/UI/Header/Header";
import Gathering from "./components/Gathering/Gathering";
import HowItWorks from "./components/UI/HowItWorks/HowItWorks";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./components/Modal/Modal";
import ThanksModal from "./components/UI/ThanksModal/ThanksModal";
// import Report from "./components/UI/Report/Report";
import Goal from "./components/UI/Goal/Goal";
import { ScrollButton } from "./components/UI/ScrollButton/ScrollButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrollBtn, setScrollBtn] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + 70 > ref.current?.offsetTop) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Brigada ref={ref} modal={toggleModal} />
      <HowItWorks modal={toggleModal} />
      <Gathering />
      <Footer />

      <ScrollButton isVisible={isScrollBtn} />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
            <ThanksModal modal={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
