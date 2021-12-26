import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import BioBourgoyen from "./pages/BioBourgoyen";
import Pluswonen from "./pages/Pluswonen";
import Dienstencentrum from "./pages/Dienstencentrum";
import MasterstudioD from "./pages/MasterstudioD";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/biobourgoyen" element={<BioBourgoyen />} />
        <Route path="/pluswonen" element={<Pluswonen />} />
        <Route path="/dienstencentrum" element={<Dienstencentrum />} />
        <Route path="/masterstudio-d" element={<MasterstudioD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
