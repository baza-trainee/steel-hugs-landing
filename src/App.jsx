import "./App.css";
import Brigada from "./components/UI/Brigada/Brigada";
import Footer from "./components/Footer";
import { Header } from "./components/UI/Header/Header";
import HowItWorks from "./components/UI/HowItWorks/HowItWorks";
function App() {
  return (
    <>
      <Header />
      <Brigada />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
