import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import BioBourgoyen from "./pages/BioBourgoyen";
import Pluswonen from "./pages/Pluswonen";
import Dienstencentrum from "./pages/Dienstencentrum";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/biobourgoyen" element={<BioBourgoyen />} />
        <Route path="/pluswonen" element={<Pluswonen />} />
        <Route path="/dienstencentrum" element={<Dienstencentrum />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
