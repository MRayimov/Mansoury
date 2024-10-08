import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
