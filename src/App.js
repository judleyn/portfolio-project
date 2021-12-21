import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Footer from './components/Footer';
import Services from './components/Services';
import AboutMe from './components/pages/AboutMePage';

function App() {
 return (
   <>
   <Navbar/>
   <Header/>
   <AboutMe/>
   <Services/>
   <Footer/>
   </>
 )
}

export default App;