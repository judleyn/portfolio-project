import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./Navbar";
import { render } from "react-dom";

function Routes {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/aboutme"><AboutMePage /></Route>
                <Route path="/contact"><ContactPage /></Route>
                <Route path="/"><HomePage /></Route>
                <Route path="/projects"><ProjectsPage /></Route>
            </Routes>
        </Router>
    )
    }

export default Routes;