import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
 return (
<BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> )
}

export default App;